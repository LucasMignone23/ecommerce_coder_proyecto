import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../../common/cartWidget/cartWidget";
import MenuIcon from '@mui/icons-material/Menu';
import "./navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú hamburguesa

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-nav">
      {/* Menú hamburguesa visible solo en pantallas pequeñas */}
      <div className="hamburger" onClick={toggleMenu}>
        <MenuIcon style={{fontSize:'40px'}} className={`line ${isOpen ? "open" : ""}`} />
      </div>

      {/* Logo a la izquierda en desktop y centrado en mobile */}
      <Link className="logo" to={"/"}>
        <img
        className="logo"
        src="https://res.cloudinary.com/dmlcoxrnt/image/upload/v1725807373/Phina_crudo_sin_fondo_db5zyn.png"
        alt="Logo Phina"/>
      </Link>
    
      {/* Listado de categorías clickeables */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li className="dropdown">
          PRODUCTOS
          {/* Menú desplegable */}
          <ul className="dropdown-content">
            <li><Link to={"/"}>Ver todo</Link></li>
            <li><Link to={"/category/Enterizos"}>Enterizos</Link></li>     
            <li><Link to={"/category/Medias"}>Medias</Link></li>
            <li><Link to={"/category/Pantuflas"}>Pantuflas</Link></li> 
            <li><Link to={"/category/Conjuntos"}>Conjuntos</Link></li>
            <li><Link to={"/category/Ropa interior"}>Ropa Interior</Link></li>
          </ul>
        </li>
        <li>CONTACTO</li>
        <li>¿QUIÉNES SOMOS?</li>
      </ul>
      {/* Ícono del carrito a la derecha */}
      <Link to={"/cart"}>
      <div className="cart">
        <CartWidget />
      </div>
      </Link>
      
    </div>
    
  );
};
