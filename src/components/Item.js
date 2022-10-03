import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function addToCart(){
    setInCart(!inCart)
  }

  const checkInsideCart = inCart? "in-cart" :"";
  const addInsideCart = inCart? "Remove item from cart":"Add to Cart"

  return (
    <li className={checkInsideCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={checkInsideCart} onClick={addToCart}>{addInsideCart}</button>
    </li>
  );
}

export default Item;
