import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Data from "../productos.json";

const ItemListContainer = () =>{
    const [productos, setProductos] = useState([]);
    const { categoriaId } = useParams();
    useEffect(() => {
    const FiltrarProductos = Data.filter((item) => {
        return item.categoria === categoriaId || categoriaId === undefined;
    });
    setProductos(FiltrarProductos);
    }, [categoriaId]);
    return (
        <div>
            {/* // section categorias */}
            <section className="categorias__grid">
                <article className="ofertas">
                    <a href="paginas/ofertas.html"><button className="categorias__boton" >Ofertas</button></a>
                </article>
                <article className="granja">
                    <a href="paginas/granja.html"><button className="categorias__boton">Granja</button></a>
                </article>
                <article className="delacasa">
                    <a href="paginas/delacasa.html"><button className="categorias__boton">De la casa</button></a>
                </article>
                <article className="verduleria">
                    <a href="paginas/verduleria.html"><button className="categorias__boton">Verdulería</button></a>
                </article>
                <article className="bebidas">
                    <a href="paginas/bebidas.html"><button className="categorias__boton">Bebidas</button></a>
                </article>
                <article className="congelados">
                    <a href="paginas/congelados.html"><button className="categorias__boton">Congelados</button></a>
                </article>
            </section>
            <section>
                <h1>{categoriaId}</h1>
                <ItemList productos={productos}/>
            </section>
        </div>
        // fin section categorias
    );
}
export default ItemListContainer;