import "./productCard.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const ProductCard = ({ img, titulo, precio }) => {
  return (
    <div className="products">
      <img className="img_card" src={img} alt="" />
      <p className="titulo">{titulo}</p>
      <p className="precio"> ${precio}</p>
      <button className="button-card">
        <AddShoppingCartIcon></AddShoppingCartIcon> Agregar al carrito
      </button>
    </div>
  );
};
