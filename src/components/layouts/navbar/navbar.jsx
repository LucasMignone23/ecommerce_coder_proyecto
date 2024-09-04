import { useState } from "react";
import { CartWidget } from "../../common/cartWidget/cartWidget";
import "./navbar.css";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toogleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "container-nav-dark" : "container-nav"}>
      {/* logo o el nombre de la empresa  */}
      <h3>Comision-71835</h3>
      {/* al medio un listado de categorias clickeables */}
      <ul>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      <button onClick={toogleMode}>Cambiar modo</button>
      <CartWidget />
    </div>
  );
};
