import React from "react";
import "./Product.css";
function Card(props) {
  return (
    <div className="product  product-card">
      <h1 className="card-title">{props.title}</h1>
      <img className="card-img" src={props.url} alt="product-img" />
      <p className="card-link">see more</p>
    </div>
  );
}

export default Card;
