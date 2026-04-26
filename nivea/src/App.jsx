
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Nivea from './pages/nivea/Nivea';
import "./App.css"
import Footer from './components/footer/Footer';
import Menu from './pages/menu/Menu';
import Login from './pages/login/Login';
import { useState } from 'react';
import About from './pages/about/About';
import Contacts from './pages/contacts/Contacts';
import Offer from './pages/offer/Offer';

function App() {


  const [isAuth, setIsAuth]=useState(localStorage.getItem("isAuth"));

  return (
  <Router>
    <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
    <Routes>
      <Route path="/" element={<Nivea  isAuth={isAuth} />}/>
      <Route path="/menu" element={<Menu isAuth={isAuth}/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/offer" element={<Offer/>}/>
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>  
    </Routes>
    <Footer/>
  </Router>
  )
}
export default App;

