import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Components/Login';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
