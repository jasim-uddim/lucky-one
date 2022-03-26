import React from "react";
import "./Cart.css";
import Selected from "./Selected/Selected";
const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div className="cart">
      <h1>Selected phone</h1>
      {cart.map((cart) => (
        <Selected cart={cart}></Selected>
      ))}
      <button>choose agin</button>
      <br></br>
      <br></br>
      <button>selected</button>
    </div>
  );
};

export default Cart;
