import './App.css';
import routes from './routes';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
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
