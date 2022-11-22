import './App.css';
import routes from './routes';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import "./i18n";
import { useTranslation } from "react-i18next";

const languages = [
  { value: 'en', text: "English" },
  { value: 'ch', text: "Swedish" },
]


function App() {

  const { t, i18n } = useTranslation();
  const [selectedLng, setSelectedLng] = useState(i18n.language);

  // This function put query that helps to
  // change the language
  const handleChange = e => {
    const lng =e.target.value;
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setSelectedLng(lng);
  }
  return (
    <div className="App">
      <select value={selectedLng} onChange={handleChange}>
                {languages.map(item => {
                    return (<option key={item.value}
                    value={item.value}>{item.text}</option>);
                })}
            </select>
      <Routes>
        {
          routes.map((res, index) => (
            <Route path={res.path} element={res.component} key={index} />
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
