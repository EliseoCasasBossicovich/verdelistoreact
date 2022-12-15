import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
// Componentes
import Navbar from "./components/Navbar";

// Desarrollo
const App = () => {
  return(
  <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
