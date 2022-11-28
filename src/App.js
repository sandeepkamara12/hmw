import "./App.css";
import routes from "./routes";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./i18n";
import { useTranslation } from "react-i18next";
import ProtectedRoutes from "./components/ProtectedRoute";
import SigninEmail from "./pages/SigninEmail";
import SigninPhone from "./pages/SigninPhone";
import VerificationWithPhone from "./pages/VerificationWithPhone";
import VerificationWithEmail from "./pages/VerificationWithEmail";
import { Navigate } from "react-router-dom";
import { userActions } from "./store/slices/userSlice";

const languages = [
  { value: "en", text: "English" },
  { value: "ch", text: "Swedish" },
];

function App() {
  const { t, i18n } = useTranslation();
  const [selectedLng, setSelectedLng] = useState(i18n.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // This function put query that helps to
  // change the language
  const handleChange = (e) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setSelectedLng(lng);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    // const userInfo = localStorage.getItem("user");
    if (token) {
      dispatch(userActions.userLoggedIn(true));
      // navigate("/profile-setup");
    }
  }, [dispatch, navigate]);
  return (
    <div className="App">
      {/* <select value={selectedLng} onChange={handleChange}>
                {languages.map(item => {
                    return (<option key={item.value}
                    value={item.value}>{item.text}</option>);
                })}
            </select> */}
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<SigninPhone />} />
        <Route path="/auth/email" element={<SigninEmail />} />
        <Route path="/auth/verify" element={<VerificationWithPhone />} />
        <Route path="/auth/verify/email" element={<VerificationWithEmail />} />
        <Route element={<ProtectedRoutes />}>
          {routes.map((res, index) => (
            <Route path={res.path} element={res.component} key={index} />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
