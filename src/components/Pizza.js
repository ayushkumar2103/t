import { addToCart } from "actions/cart.action";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

import "styles/Pizza.style.css";

const Pizza = ({ pizza }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const [variant, setVariant] = useState("small");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="pizza-card bg-white text-center">
      <h1 className="pizza-name py-3">{pizza.name}</h1>
      <img
        src={pizza.image}
        alt={pizza.name}
        style={{ width: "200px", height: "200px" }}
        className="img-fluid"
        onClick={() => setShowModal(true)}
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
      <div className="flex-container mt-3">
        <div className="prices w-100">
          <h5>Price: ₹ {pizza.prices[0][variant] * quantity}</h5>
        </div>
        <div className="button-cart w-100">
          <button
            className="btn btn-primary "
            onClick={() => dispatch(addToCart(pizza, quantity, variant))}
          >
            Add To Cart
          </button>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton onClick={() => setShowModal(false)}>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            alt={pizza.name}
            className="img-fluid"
            style={{ height: "400px" }}
          />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button
            className="btn btn-danger btn-md"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>

      <style jsx>
        {`
          .pizza-card {
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
          }
        `}
      </style>
    </div>
  );
};

export default Pizza;
