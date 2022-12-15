import { Link } from "react-router-dom";
const Item =({name, img ,price, id}) =>{
    return (
        <article className="card productos__listado" style={{width: "18rem"}}>
            <img link={img} className="card-img-top" alt={name}/>
        <div class="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price}</p>
            <Link to={`/item/${id}`}>
                <button className="btn btn-primary productos__boton">Agregar al pedido</button>
            </Link>
        </div>
    </article>
    );
}
export default Item;