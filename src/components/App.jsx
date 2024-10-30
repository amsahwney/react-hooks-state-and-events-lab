import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react"

function App() {
  const [mode, toggleMode] = useState(false)
  const [buttonText, setButtonText] = useState("Dark Mode")

  const appClass = mode ? "App dark" : "App light"

  function handleDarkMode() {
    toggleMode(mode => mode ? false : true)
    setButtonText(buttonText => buttonText === "Dark Mode" ? "Light Mode" : "Dark Mode")
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>

          <button onClick = {handleDarkMode}>{ buttonText }</button>

      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
