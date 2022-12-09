import { Link } from "react-router-dom";
const Item =({name, img ,price}) =>{
    return (
        <article className="card productos__listado" style={{width: "18rem"}}>
        <Link to={'/item/'+ name}>
            <img link={img} className="card-img-top" alt={name}/>
        <div class="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">${price}</p>
            <Link to={"/item/{name}"}>
                <button className="btn btn-primary productos__boton">Agregar al pedido</button>
            </Link>
            {/* <button className="btn btn-secpndary productos__boton--quitar">Quitar</button> */}
        </div>
        </Link>
    </article>
    );
}
export default Item;