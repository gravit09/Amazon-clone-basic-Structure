import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "add-to-basket",
      item: {
        id: props.id,
        title: props.title,
        price: props.price,
        url: props.url,
        rating: props.rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-info">
        <p>{props.title}</p>
        <p>
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product-rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={props.url} alt="product-img" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
