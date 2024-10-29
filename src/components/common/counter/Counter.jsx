import "./Counter.css";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div className="botones-contador">
      <button onClick={restar}>Quitar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>Agregar</button>
      <button className="agregar" onClick={() => onAdd(contador)}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
