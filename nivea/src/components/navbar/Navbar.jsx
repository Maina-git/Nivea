import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";

function Navbar({ isAuth, setIsAuth }) {
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      setIsAuth(false);
     // navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="navBar">
      {/* Logo */}
      <div className="logo">
        <h1>NIVEA</h1>
      </div>

      {/* Navigation Links */}
      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/menu">PRODUCTS</Link>
        <Link to="/offer">SPECIAL OFFER</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contacts">CONTACTS</Link>
      </div>

      {/* Auth Section */}
      <div className="signIn">
        {!isAuth ? (
          <Link to="/login" className="loginBtn">
            SIGN IN
          </Link>
        ) : (
          <button className="signOut" onClick={logOut}>
            SIGN OUT
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;

