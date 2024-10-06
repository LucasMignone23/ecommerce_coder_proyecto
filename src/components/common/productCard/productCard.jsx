import "./productCard.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import * as React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, imageUrl, description, id }) => {
  return (
    <div className="products">
      <img className="img_card" src={imageUrl} alt="" />
      <p className="titulo">{title}</p>
      <p className="precio"> ${price}</p>
      <button className="button-card">
        <Link to={`/productDetail/${id}`}>Ver mas</Link>
      </button>
    </div>
  );
};

{/*<AddShoppingCartIcon></AddShoppingCartIcon>*/} 

export default ProductCard;
