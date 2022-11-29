import CartPedido from "./CartWidget.jsx";
import headerLogo from "../recursos/logovd.png";

const Navbar = () =>{
    
    return(
        <nav className="header">
            {/* logo*/}
            <a href="index.html"><img className="header__lista--logo" alt="VerdeListo" src={headerLogo}/></a>
            {/* fin logo */}
            <nav className="navbar navbar-expand-lg header__nav color-header">
                <div className="container-fluid header__cont">
                    <div className="p-2 flex-fill header__pedidos">
                        <CartPedido/>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse header__collapse" id="navbarSupportedContent">
                        <div>
                            <form className="d-flex " role="search">
                                <input className="form-control me-2 header__buscar" type="search" placeholder="Buscar..." aria-label="Search"/>
                                <button className="btn btn-outline-success header__buscar--boton color-buscarboton" type="submit">Buscar</button>
                            </form>
                        </div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle fs-5 fw-semibold categoria__font" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="paginas/ofertas.html">Ofertas</a></li>
                                    <li><a className="dropdown-item" href="paginas/delacasa.html">De la Casa</a></li>
                                    <li><a className="dropdown-item" href="paginas/verduleria.html">Verdulería</a></li>
                                    <li><a className="dropdown-item" href="paginas/granja.html">Granja</a></li>
                                    <li><a className="dropdown-item" href="paginas/bebidas.html">Bebidas</a></li>
                                    <li><a className="dropdown-item" href="paginas/congelados.html">Congelados</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </nav>
    );
}

export default Navbar;