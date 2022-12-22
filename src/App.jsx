import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
// Componentes
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

// Desarrollo
const App = () => {
  return(
  <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    <ProductList/>
  </div>
  )
}

export default App;
