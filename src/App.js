import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Display from './Display';

const App = () => {
  console.log("Render App");

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
