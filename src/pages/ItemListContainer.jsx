import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Data from "../productos.json";
import { Link } from "react-router-dom";

const ItemListContainer = () =>{
    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
    const getProductos = new Promise(resolve => {
        setTimeout(() => {
            resolve(Data)
        }, 1000);
    });
        if (categoryId) {
            getProductos.then(res => setProductos(res.filter(productos => productos.category === categoryId)));    
        } else {
        getProductos.then(res => setProductos(res))
        }
    }, [categoryId])
    
    return (
        <div>
            {/* // section categorias */}
            <section className="categorias__grid">
                <article className="ofertas">
                    <Link to ='/categoria/ofertas'>
                        <button className="categorias__boton" >Ofertas</button>
                    </Link>
                </article>
                <article className="granja">
                    <Link to ='/categoria/granja'>
                        <button className="categorias__boton">Granja</button>
                    </Link>
                </article>
                <article className="delacasa">
                    <Link to ='/categoria/delacasa'>
                        <button className="categorias__boton">De la casa</button>
                    </Link>
                </article>
                <article className="verduleria">
                    <Link to ='/categoria/verduleria'>
                        <button className="categorias__boton">Verdulería</button>
                    </Link>
                </article>
                <article className="bebidas">
                    <Link to ='/categoria/bebidas'>
                        <button className="categorias__boton">Bebidas</button>
                    </Link>
                </article>
                <article className="congelados">
                    <Link to ='/categoria/congelados'>
                        <button className="categorias__boton">Congelados</button>
                    </Link>
                </article>
            </section>
            <section>
                <h1>{categoryId}</h1>
                <ItemList productos={productos}/>
            </section>
        </div>
        // fin section categorias
    );
}
export default ItemListContainer;