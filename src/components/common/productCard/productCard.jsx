import "./productCard.css";

export const ProductCard = ({ titulo, precio }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <h3>{precio}</h3>
      <button>Ver Detalles</button>
    </div>
  );
};
