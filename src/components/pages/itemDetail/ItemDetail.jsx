import React from 'react'
import './ItemDetail.css'
import CounterContainer from '../../common/counter/CounterContainer';

const ItemDetail = ({item, onAdd, totalItems}) => {
  return (
    <div className="container">
      <h1 className="title">{item.title}</h1>
      <img className='img' src={item.imageUrl} alt={item.title} />
      <p>{item.description}</p>
      <p>${item.price}</p>
      <CounterContainer
        onAdd={onAdd}
        stock={item.stock}
        totalItems={totalItems}
      />
    </div>
  )
}

export default ItemDetail;