import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import Contacto from './pages/Contacto';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Novedades from './pages/Novedades';

function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="nosotros" element={<Nosotros/>}/>
          <Route path="novedades" element={<Novedades/>}/>
          <Route path="contacto" element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;