import React, { useState } from 'react'
import ItemDetail from './itemDetail';
import { products } from '../../../productsMock';
import { useParams } from 'react-router-dom';

const itemDetailContainer = () => {
  //Hook ----> Recuperar la parte dinamica de la ruta
  const {item, setItem} = useState({});

  const { id } = useParams(); //Devuelve un objeto

  useEffect(()=>{
    let product = products.find(product => product.id === id);
    setItem(product);
  },[id]);

  return <ItemDetail/>;
}

export default itemDetailContainer