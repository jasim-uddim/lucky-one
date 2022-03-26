import "./Cart.css";
import Selected from "./Selected/Selected";
const Cart = (props) => {
  const { cart, allClear, randomNumber } = props;

  return (
    <div className="cart">
      <h1>Selected phone</h1>

      {cart.map((cart) => (
        <Selected cart={cart}></Selected>
      ))}

      <button onClick={allClear}>choose agin</button>
      <br></br>
      <br></br>
      <button onClick={randomNumber}>choose 1 for me</button>
    </div>
  );
};

export default Cart;
