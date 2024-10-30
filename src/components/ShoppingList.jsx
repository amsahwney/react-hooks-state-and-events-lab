import React from "react";
import Item from "./Item";
import { useState } from "react"

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("Filter by category")

  const filteredItems = items.filter(item =>  item.category === selectedCategory)
  const allItems = items.map( item => (<Item key={item.id} name={item.name} category={item.category} />))
  const mappedItems = filteredItems.map( item => (<Item key={item.id} name={item.name} category={item.category} />))
  const displayItems = filteredItems.length ? mappedItems : allItems
  
  function handleSelect(event) {
    setCategory(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        { displayItems }
      </ul>
    </div>
  );
}

export default ShoppingList;
