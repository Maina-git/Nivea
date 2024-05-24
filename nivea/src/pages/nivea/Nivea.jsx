import React from 'react'
import "./Nivea.css"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Nivea({isAuth}) {

  let navigate=useNavigate();

useEffect(()=>{
  if(!isAuth){
    navigate("/login");
  }
},[])



  return (
    <div className="nivea">
      <div className="image">
<img src="/images/Nivea_Logo.png " alt="" />
      </div>
      <div className="content">

<h1>Nivea</h1>
<h2>It Starts With You</h2>
<p>
This creamy formula, infused with our Deep Moisture Serum and Vitamin E to nourish and intensively moisturize normal to dry skin. Perfect for everyday use, Original Daily Moisture lotion will smooth skin and provide deep nourishing moisture for 48 hours. Beautiful skin is closer than you think.
</p>
      </div>
    </div>
  )
}
export default Nivea;












