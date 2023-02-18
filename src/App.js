import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Display from './Display';

const App = () => {
  console.log("Render App");

  return (
    <BrowserRouter>
      <Routes>
        <Route path=":channel" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
