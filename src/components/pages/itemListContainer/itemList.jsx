import ProductCard from "../../common/productCard/productCard";

export const ItemList = ({ items }) => {
  return (
    <div className="productos">
      {items.map((item) => {
        return <ProductCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ItemList;
