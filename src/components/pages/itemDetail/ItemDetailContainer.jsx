import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { toast } from "sonner";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ItemDetailContainer = () => {
  // hook --> recuperar la parte dinamica de la ruta
  const [item, setItem] = useState({});
  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams(); // devuelve un objeto {}

  let totalItems = getTotalQuantityById(id);

  // const navigate = useNavigate();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc).then((res) => {
      setItem({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (quantity) => {
    let productoParaElCarrito = { ...item, quantity };
    addToCart(productoParaElCarrito);

    toast.success("Se agrego el producto", {
      closeButton: true,
      description: "algo mas",
      position: "top-center",
    });
  };

  return <ItemDetail item={item} onAdd={onAdd} totalItems={totalItems} />;
};

export default ItemDetailContainer;
