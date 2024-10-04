import "./itemListContainer.css";
import { products } from "../../../productsMock";
import { useEffect, useState } from "react";
import { ItemList } from "./itemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams(); //Devuelve un objeto con la parte dinamica de la ruta

  useEffect(() => {
    const filteredProducts = products.filter((product)=> product.category === categoryName); 
    //Crear una promesa
    const getProducts = new Promise((resolve, reject) => {
      let isLogued = true;
      if (isLogued) {
        resolve(categoryName? filteredProducts : products); //Si categoryName existe, retorna filteredProducts, si no, retorna products que seria todos los productos.
      } else {
        reject({ Message: "Algo salio mal" });
      }
    });

    //Manejar la promesa
    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log("entro en el cath", error);
      });
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
