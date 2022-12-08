import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from "./pages/Inicio";
import Ofertas from "./pages/Ofertas";
import Delacasa from "./pages/Delacasa";
import Verduleria from "./pages/Verduleria";
import Granja from "./pages/Granja";
import Bebidas from "./pages/Bebidas";
import Congelados from "./pages/Congelados";
import Pedidos from "./pages/Pedidos";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import Navbar from "./components/Navbar";

const App = () => {
  return(
  <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Inicio/>}/>
        <Route path='ofertas' element={<Ofertas/>}/>
        <Route path='delacasa' element={<Delacasa/>}/>
        <Route path='verduleria' element={<Verduleria/>}/>
        <Route path='granja' element={<Granja/>}/>
        <Route path='bebidas' element={<Bebidas/>}/>
        <Route path='congelados' element={<Congelados/>}/>
        <Route path='pedido' element={<Pedidos/>}/>
        <Route path='item/:categoria/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    <ItemListContainer 
    titulo="Inicio"/>
  </div>
  )
}

export default App;
