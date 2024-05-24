import React from 'react'
import { ITEMS } from '../../ITEMS';
import Product from '../../components/product/Product';
import "./Menu.css"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Menu({isAuth}){
  const navigate=useNavigate();

useEffect(()=>{
  if(!isAuth){
navigate("/login");
  }
})


  return (
    <div className="menu">
        {
      ITEMS.map((item)=><Product key={item.id} data={item}/>)
        }
    </div>
  )
}

export default Menu;
