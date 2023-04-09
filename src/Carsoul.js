import React from "react";
import "./Carsoul.css";
function Carsoul() {
  return (
    <div className="carousel-config">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide slider"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71U98vaQGYL._SX3000_.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61LFzlwUpaL._SX3000_.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61d-2fv7RPL._SX3000_.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carsoul;
