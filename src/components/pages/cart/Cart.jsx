import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Cart.css";

const Cart = ({ cart, clearCart, deleteProductById, total }) => { 
  const limpiarConAlert = () => { 
    Swal.fire({
      title: "seguro quieres limpiar?",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `No, dejar como estaba`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "se limpio el carrito",
        });
      } else if (result.isDenied) {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "el carrito queda como estaba",
        });
      }
    });
  };

  return (
    <div style={{ padding: "50px" }}>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <div className="producto-carrito">
            <img className="img-carrito" src={product.imageUrl} alt="" />
            <h2>{product.title}</h2>
            <h3>$ {product.price}</h3>
            <h3>Cant : {product.quantity}</h3>
            <h3>Subtotal : {product.price * product.quantity}</h3>
            <button className="eliminar" onClick={() => deleteProductById(product.id)}>Eliminar</button>
            </div> 
          </div>
        );
      })}

      {total > 0 && (
        <>
        <div className="finalizar">
        <button className="limpiar-carrito" onClick={limpiarConAlert}>Limpiar carrito</button>
          <Link to="/checkout">
            <button className="finalizar-compra">Finalizar compra</button>
          </Link>
        </div>
        </>
      )}
      <div className="total">
      {total > 0 ? (
        <h2>El total a pagar es : $ {total}</h2>
      ) : (
        <h2>No tienes elementos todavia</h2>
      )}
      </div>
    
    </div>
  );
};

export default Cart;
