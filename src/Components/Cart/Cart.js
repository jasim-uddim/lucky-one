import "./Cart.css";
import Selected from "./Selected/Selected";
const Cart = (props) => {
  const { cart, allClear, chooseOne } = props;

  return (
    <div className="cart">
      <h1>Selected phone</h1>

      {cart.map((cart) => (
        <Selected cart={cart}></Selected>
      ))}

      <button onClick={allClear}>choose agin</button>
      <br></br>
      <br></br>
      <button onClick={chooseOne}>selected</button>
    </div>
  );
};

export default Cart;
