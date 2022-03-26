import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Phone from "./Phone/Phone";
import "./Shop.css";
const Shop = () => {
  const [phones, setPhones] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);
  const addToCart = (phone) => {
    console.log(phone);
    const storedCart = [...cart, phone];
    setCart(storedCart);
  };
  const allClear = () => {
    setCart([]);
  };
  const chooseOne = () => {
    const choose = Math.floor(Math.random() * cart.length);

    setCart([cart[choose]]);
  };

  return (
    <div className="main-container">
      <div className="shop-container">
        {phones.map((phone) => (
          <Phone phone={phone} key={phone.id} addToCart={addToCart}></Phone>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} allClear={allClear} chooseOne={chooseOne}></Cart>
      </div>
    </div>
  );
};

export default Shop;
