import React from 'react';
import MobileList from './components/MobileList';
import ProductList from './components/ProductList';
import WeatherDashboard from "./components/WeatherDashboard";
import EmployeeForm from './components/EmployeeForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';

function App() {
  

  return (
   
          <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Route>
    </Routes>
  </BrowserRouter>


  );
}

export default App;

