import React from 'react'
import "./Login.css"
import { auth } from '../../Firebase'
import { provider } from '../../Firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'


function Login({setIsAuth}) {
  let navigate=useNavigate();

const Login=()=>{
  signInWithPopup(auth, provider).then((result)=>{
    localStorage.setItem("isAuth", true);
    setIsAuth(true);
navigate("/");
  })
}

  return (
    <div  className="login">
      <div className="google">
        <h1>Sign in With Google To Continue</h1>
        <button onClick={Login}>
          <FcGoogle className="icon"/>
          Sign in With Google</button>
        </div>
        </div>
  )
}

export default Login
