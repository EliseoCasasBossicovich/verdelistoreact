import iconopedido from "./recursos/pedido.svg";

const CartPedido = () =>{
    return(
        <div className="header__lista">
            <a className="navbar-brand" href="paginas/pedidos.html"> Pedido
                <img className="header__pedidos--ico" src={iconopedido} alt="pedidos"/>
            </a>
            <div className="header__pedidos--list">
                <p className="header__carrito--cant">1</p>
            </div>
        </div>
    )
}
export default CartPedido;