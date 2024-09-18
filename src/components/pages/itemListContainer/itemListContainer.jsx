import "./itemListContainer.css";
import { products } from "../../../productsMock";
import { useEffect, useState } from "react";
import { ItemList } from "./itemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    //Crear una promesa
    const getProducts = new Promise((resolve, reject) => {
      let isLogued = true;
      if (isLogued) {
        resolve(products);
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
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
