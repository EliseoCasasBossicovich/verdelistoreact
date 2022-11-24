import React from "react";
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";

const App = () => {
  return(
  <div>
    <Navbar />
    <ItemList 
    titulo="Inicio"/>
  </div>
  )
}

export default App;
