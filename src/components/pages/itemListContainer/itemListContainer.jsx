import { ProductCard } from "../../common/productCard/productCard";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1>Listado de productos</h1>
      <div>
        <ProductCard titulo="Medias" precio={1500} />
      </div>
      <h4>{greeting}</h4>
    </div>
  );
};
