import { Link } from "react-router-dom";

const GridInicio = () => {
    return(
        <section className="categorias__grid">
        <article className="ofertas">
        <Link to='ofertas'>
            <button className="categorias__boton" >Ofertas</button>
        </Link>
        </article>
        <article className="granja">
            <Link to='granja'>
            <button className="categorias__boton">Granja</button>
            </Link>
        </article>
        <article className="delacasa">
            <Link to='delacasa'>
                <button className="categorias__boton">De la casa</button>
            </Link>
        </article>
        <article className="verduleria">
            <Link to='verduleria'>
                <button className="categorias__boton">Verdulería</button>
            </Link>
        </article>
        <article className="bebidas">
            <Link to='bebidas'>
                <button className="categorias__boton">Bebidas</button>
            </Link>
        </article>
        <article className="congelados">
            <Link to='congelados'>
                <button className="categorias__boton">Congelados</button>
            </Link>
        </article>
    </section>
    );
}
export default GridInicio;