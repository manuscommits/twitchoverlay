import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Display from './Display';

const App = () => {
  console.log("Render App");

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Display />
    </BrowserRouter>
  );
}

export default App;
