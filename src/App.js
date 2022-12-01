import "./App.css";
import routes from "./routes";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./i18n";
import { useTranslation } from "react-i18next";
import ProtectedRoutes from "./components/ProtectedRoute";
import SigninEmail from "./pages/SigninEmail";
import SigninPhone from "./pages/SigninPhone";
import { Navigate } from "react-router-dom";
import { userActions } from "./store/slices/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Terms from "./pages/TermsOfService";

const languages = [
  { value: "en", text: "English" },
  { value: "ch", text: "Swedish" },
];

function App() {
  const { t, i18n } = useTranslation();
  const [selectedLng, setSelectedLng] = useState(i18n.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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
    const user = localStorage.getItem("user");

    if (token && user) {
      dispatch(userActions.userLoggedIn(true));
      const parseUser = JSON.parse(user);
      dispatch(userActions.userInfo(parseUser));
      if (!parseUser.is_updated) {
        navigate("/profile-setup");
      } else if (
        location.pathname === "/profile-setup" &&
        parseUser.is_updated
      ) {
        navigate("/projects");
      }
    }
  }, []);
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
        <Route path="/terms" element={<Terms />} />
        <Route element={<ProtectedRoutes />}>
          {routes.map((res, index) => (
            <Route path={res.path} element={res.component} key={index} />
          ))}
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} limit={1} />
    </div>
  );
}

export default App;
