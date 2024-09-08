import { CartWidget } from "../../common/cartWidget/cartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="container-nav">
      {/* logo o el nombre de la empresa  */}
      <img
        className="logo"
        src="https://res.cloudinary.com/dmlcoxrnt/image/upload/v1725807373/Phina_crudo_sin_fondo_db5zyn.png"
        alt="Logo Phina"
      />
      {/* al medio un listado de categorias clickeables */}
      <ul>
        <li>PRODUCTOS</li>
        <li>CONTACTO</li>
        <li>¿QUIENES SOMOS?</li>
      </ul>
      <div className="cart">
        <CartWidget />
      </div>
    </div>
  );
};
