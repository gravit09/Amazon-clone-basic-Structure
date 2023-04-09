import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutCard from "./CheckoutCard";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <div className="checkout-title">
          <h2>Shopping Cart</h2>
        </div>
        {basket.map((item) => (
          <>
            <CheckoutCard
              id={item.id}
              title={item.title}
              url={item.url}
              price={item.price}
              rating={item.rating}
            />
            <hr />
          </>
        ))}
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
