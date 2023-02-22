import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Display from './Display';

const App = () => {
  console.log("Render App");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/twitchoverlay" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
