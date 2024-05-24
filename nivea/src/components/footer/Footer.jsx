import React from 'react'
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <div className="brands">
        <h1>Brands</h1>
<ul>
  <li>Nivea Face</li>
  <li>Nivea Body</li>
  <li>Nivea Deo</li>
  <li>Nivea Men</li>
</ul>
      </div>
      <div className="contacts">
        <h1>Contacts</h1>
        <ul>
          <li>faceBook <FaFacebookF/>  </li>
          <li>Twitter <FaXTwitter/> </li>
          <li>instagram  <CiInstagram/> </li>
          <li>WhatsApp <FaWhatsapp/> </li>
        </ul>
      </div>
      <div className="copy"></div>
    </div>
  )
}
export default Footer;
