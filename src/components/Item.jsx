import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [cart, toggleCart] = useState(true)
  const [itemButton, toggleItemButton] = useState(true)
  const [itemText, setItemText] = useState("Add to Cart")

  const itemClass = cart ? "" : "in-cart"
  const buttonClass = itemButton ? "add" : "remove"

  function handleCartAdd(){
    toggleCart(cart => cart ? false : true)
    toggleItemButton(itemButton => itemButton ? false : true)
    setItemText(itemText => itemText === "Add to Cart" ? "Remove From Cart" : "Add to Cart")
  }

  return (
    <li className= { itemClass }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={ buttonClass } onClick = {handleCartAdd}>{ itemText }</button>
    </li>
  );
}

export default Item;
