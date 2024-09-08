import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={1} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};
