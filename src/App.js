import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './scenes/home';
import { FormTask } from './scenes/FormTask';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<FormTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
