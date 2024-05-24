import React from 'react'
import "./Product.css"

function Product(props) {
const {image, name, description, price}=props.data;

  return (
    <div className="product">
      <img src={image} alt="" />
      <h1>{name}</h1>
      <h2>{description}</h2>
      <p>${price}</p>
    </div>
  )
}
export default Product;
















