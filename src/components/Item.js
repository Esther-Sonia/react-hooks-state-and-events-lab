import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(prevState => !prevState);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button  onClick={toggleCart}>
    {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
