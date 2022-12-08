import iconopedido from "../recursos/pedido.svg";
import { Link } from "react-router-dom";

const CartPedido = () =>{
    return(
        <div className="header__lista">
            <Link to ='pedidos'>
            <span className="navbar-brand"> Pedido
                <img className="header__pedidos--ico" src={iconopedido} alt="pedidos"/>
            </span>
            </Link>
            
            <div className="header__pedidos--list">
                <p className="header__carrito--cant">1</p>
            </div>
        </div>
    )
}
export default CartPedido;