const ItemList = ({titulo}) =>{
    return (
        <div>
            <div>
                <h1>{titulo}</h1>
            </div>
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
        </div>
        // fin section categorias
    );
}
export default ItemList;