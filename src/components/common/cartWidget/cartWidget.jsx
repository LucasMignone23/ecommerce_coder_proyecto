import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext); // ---> objeto del value de ese context
  const totalItems = getTotalItems();
  return (
    <div>
      <Badge badgeContent={totalItems} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};
