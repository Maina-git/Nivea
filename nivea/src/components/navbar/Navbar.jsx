import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { auth } from '../../Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Navbar({isAuth, setIsAuth}){

const logOut=()=>{
signOut(auth).then(()=>{
  localStorage.clear();
  setIsAuth(false);
  window.location.pathname="/login";

})

}


  return (
    <div className="navBar">

        <nav className="logo">
         <h1>NIVEA</h1>
        </nav>
        <div className="links">
        <Link to="/">NIVEA</Link>
      <Link to="/menu">PRODUCTS</Link>
      
      { !isAuth ?
      (<Link to="/login">SIGN IN</Link>)
      :
      (<button className="signOut" onClick={logOut}>Sign Out</button>)
      }
</div>
    </div>
  )
}
export default Navbar;
