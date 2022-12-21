import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import ItemList from "./ItemList";
import Data from "../productos.json";
import { Link } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";

const ItemListContainer = () =>{
    const [productos, setProductos] = useState([]);
    const { id } = useParams();
    useEffect(() => {
    const getProductos = new Promise(resolve => {
        setTimeout(() => {
            resolve(Data)
        }, 1000);
    });
        if (id) {
            getProductos.then(res => 
                setProductos(res.filter((productos) => productos.id === id)));    
        } else {
        getProductos.then((res) => setProductos(res))
        }
    }, [id])
    // console.log(productos);
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
                <h1>{id}</h1>
                {/* <ItemList productos={productos}/> */}
            </section>
            <section className="row">
{productos.map((producto) => {
                    return <ItemDetail key={producto.id} data ={producto} />
                })}
            </section>
        </div>
        // fin section categorias
    );
}
export default ItemListContainer;