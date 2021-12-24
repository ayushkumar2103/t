import { useState } from "react";
import "styles/pizza.style.css";

const Pizza = ({ pizza }) => {
  const [variant, setVariant] = useState("small");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="pizza-card bg-white shadow-lg text-center rounded">
      <h1 className="pizza-name py-3">{pizza.name}</h1>
      <img
        src={pizza.image}
        alt={pizza.name}
        style={{ width: "200px", height: "200px" }}
        className="img-fluid"
      />

      <div className="flex-container">
        <div className="variant w-100">
          <p>Variants: </p>
          <select
            className="form-control"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            {pizza.variants.map((variant, index) => (
              <option key={index} value={variant}>
                {variant}
              </option>
            ))}
          </select>
        </div>
        <div className="quantity w-100">
          <p>Quantity: </p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => {
              return (
                <option key={x} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* prices and add to cart */}
      <div className="flex-container">
        <div className="prices w-100 my-2">
          <h5>Price: {pizza.prices[0][variant] * quantity}</h5>
        </div>
        <div className="button-cart w-100 my-2">
          <button className="btn btn-primary ">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
