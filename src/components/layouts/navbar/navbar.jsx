import { CartWidget } from "../../common/cartWidget/cartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="container-nav">
      {/* logo o el nombre de la empresa  */}
      <h3>Comision-71835</h3>
      {/* al medio un listado de categorias clickeables */}
      <ul>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      <CartWidget />
    </div>
  );
};
