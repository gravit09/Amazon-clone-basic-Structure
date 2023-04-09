import React from "react";
import "./CheckoutCard.css";
import { useStateValue } from "./StateProvider";
function CheckoutCard(props) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "remove-from-cart",
      id: props.id,
    });
  };

  return (
    <div className="checkout-card">
      <img className="checkout-img" src={props.url} alt="product-img" />
      <div className="checkout-info">
        <p className="checkout-title">{props.title}</p>
        <p className="checkout-prices">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkout-rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutCard;
