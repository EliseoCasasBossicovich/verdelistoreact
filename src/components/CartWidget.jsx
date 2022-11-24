import iconopedido from "./recursos/pedido.svg";

const CartPedido = () =>{
    return(
        <div>
            <a className="navbar-brand" href="paginas/pedidos.html"> Pedido
                <img className="header__pedidos--ico" src={iconopedido} alt="pedidos"/>
            </a>
        </div>
    )
}
export default CartPedido;