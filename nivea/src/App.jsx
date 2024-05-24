
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Nivea from './pages/nivea/Nivea';
import "./App.css"
import Footer from './components/footer/Footer';
import Menu from './pages/menu/Menu';
import Login from './pages/login/Login';
import { useState } from 'react';

function App() {


  const [isAuth, setIsAuth]=useState(localStorage.getItem("isAuth"));

  return (
  <Router>
    <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
    <Routes>
      <Route path="/" element={<Nivea  isAuth={isAuth} />}/>
      <Route path="/menu" element={<Menu isAuth={isAuth}/>}/>
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>  
    </Routes>
    <Footer/>
  </Router>
  )
}
export default App;

