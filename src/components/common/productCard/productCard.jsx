import "./productCard.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import * as React from "react";

const ProductCard = ({ title, price, imageUrl, description }) => {
  return (
    <div className="products">
      <img className="img_card" src={imageUrl} alt="" />
      <p className="titulo">{title}</p>
      <p className="precio"> ${price}</p>
      <button className="button-card">
        <AddShoppingCartIcon></AddShoppingCartIcon> Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
