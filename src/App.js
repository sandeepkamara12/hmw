import "./App.css";
import routes from "./routes";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./i18n";
import { useTranslation } from "react-i18next";
import ProtectedRoutes from "./components/ProtectedRoute";
import SigninEmail from './pages/SigninEmail';
import SigninPhone from './pages/SigninPhone';
import VerificationWithEmail from './components/Auth/VerificationWithEmail';
import { Navigate } from 'react-router-dom';
import { userActions } from './store/slices/userSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      // dispatch(userActions.userLoggedIn(true));
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
                    {routes.map((res, index) => (
                        <Route
                            path={res.path}
                            element={res.component}
                            key={index}
                        />
                    ))}
            </Routes>
            <ToastContainer autoClose={2000} limit={1} />
    </div>
  );
}

export default App;
