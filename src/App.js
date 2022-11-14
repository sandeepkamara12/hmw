import './App.css';
import SigninPhone from './components/signin/SigninPhone';
import SigninEmail from './components/signin/SigninEmail';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin-phone" element={<SigninPhone />}></Route>
        <Route path="/signin-email" element={<SigninEmail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
