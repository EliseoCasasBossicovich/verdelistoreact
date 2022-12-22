import CartPedido from "./CartWidget.jsx";
import headerLogo from "../recursos/logovd.png";
import { Link } from "react-router-dom";

const Navbar = () =>{
    
    return(
        <nav className="header">
            {/* logo*/}
            <Link to = '/'>
            <img className="header__lista--logo" alt="VerdeListo" src={headerLogo}/>
            </Link>
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
                                    <Link to ='/category/ofertas'>
                                        <li className="dropdown-item">Ofertas</li>
                                        </Link>
                                    <Link to ='/category/empanadas'>
                                        <li className="dropdown-item">Empanadas</li>
                                        </Link>
                                        <Link to ='/category/canelones'>
                                        <li className="dropdown-item">Canelones</li>
                                        </Link>
                                    <Link to ='/category/verduleria'>
                                        <li className="dropdown-item">Verdulería</li>
                                        </Link>
                                    <Link to ='/category/granja'>
                                        <li className="dropdown-item">Granja</li>
                                    </Link>
                                    <Link to ='/category/bebidas'>
                                        <li className="dropdown-item">Bebidas</li>
                                    </Link>
                                    <Link to ='/category/congelados'>
                                        <li className="dropdown-item">Congelados</li>
                                    </Link>
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

// import CartPedido from "./CartWidget.jsx";
// import headerLogo from "../recursos/logovd.png";
// import { Link } from "react-router-dom";

// const Navbar = () =>{
    
//     return(
//         <nav className="header">
//             {/* logo*/}
//             <Link to = '/'>
//             <img className="header__lista--logo" alt="VerdeListo" src={headerLogo}/>
//             </Link>
//             {/* fin logo */}
//             <nav className="navbar navbar-expand-lg header__nav color-header">
//                 <div className="container-fluid header__cont">
//                     <div className="p-2 flex-fill header__pedidos">
//                         <CartPedido/>
//                     </div>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"/>
//                     </button>
//                     <div className="collapse navbar-collapse header__collapse" id="navbarSupportedContent">
//                         <div>
//                             <form className="d-flex " role="search">
//                                 <input className="form-control me-2 header__buscar" type="search" placeholder="Buscar..." aria-label="Search"/>
//                                 <button className="btn btn-outline-success header__buscar--boton color-buscarboton" type="submit">Buscar</button>
//                             </form>
//                         </div>
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
//                             <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle fs-5 fw-semibold categoria__font" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                 Categorias
//                                 </a>
//                                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                     <Link to ='/categoria/ofertas'>
//                                         <li className="dropdown-item">Ofertas</li>
//                                         </Link>
//                                     <Link to ='/categoria/delacasa'>
//                                         <li className="dropdown-item">De la Casa</li>
//                                         </Link>
//                                     <Link to ='/categoria/verduleria'>
//                                         <li className="dropdown-item">Verdulería</li>
//                                         </Link>
//                                     <Link to ='/categoria/granja'>
//                                         <li className="dropdown-item">Granja</li>
//                                     </Link>
//                                     <Link to ='/categoria/bebidas'>
//                                         <li className="dropdown-item">Bebidas</li>
//                                     </Link>
//                                     <Link to ='/categoria/congelados'>
//                                         <li className="dropdown-item">Congelados</li>
//                                     </Link>
//                                 </ul>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </nav>
//     );
// }

// export default Navbar;