import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Phone.css";
const Phone = (props) => {
  const { phone, addToCart } = props;
  const { name, price, url } = phone;

  return (
    <div className="phone-container">
      <img src={url} alt="" />

      <p>Name: {name}</p>
      <p>price: {price}</p>

      <button onClick={() => addToCart(phone)} className="btn">
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Phone;
