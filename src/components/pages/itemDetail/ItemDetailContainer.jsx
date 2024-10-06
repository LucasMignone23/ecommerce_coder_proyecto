import React, {useEffect, useState } from 'react'
import ItemDetail from './itemDetail';
import { products } from '../../../productsMock';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  //Hook ----> Recuperar la parte dinamica de la ruta
  const [item, setItem] = useState({});

  const { id } = useParams(); //Devuelve un objeto

  useEffect(()=>{
    let product = products.find(product => product.id === id);
    setItem(product);
  },[id]);

  return <ItemDetail item={item}/>;
}

export default ItemDetailContainer;