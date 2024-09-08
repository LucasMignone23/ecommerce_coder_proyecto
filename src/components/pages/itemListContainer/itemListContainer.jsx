import "./itemListContainer.css";
import { ProductCard } from "../../common/productCard/productCard";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="productos">
      <div className="card">
        <div>
          <ProductCard
            img="https://res.cloudinary.com/dmlcoxrnt/image/upload/v1725808803/medias_animales_hj0wjv.jpg"
            titulo="Medias"
            precio={1500}
          />
        </div>
        <h4>{greeting}</h4>
      </div>
      <div className="card">
        <div>
          <ProductCard
            img="https://res.cloudinary.com/dmlcoxrnt/image/upload/v1725808803/medias_animales_hj0wjv.jpg"
            titulo="Medias"
            precio={1500}
          />
        </div>
      </div>
      <div className="card">
        <div>
          <ProductCard
            img="https://res.cloudinary.com/dmlcoxrnt/image/upload/v1725808803/medias_animales_hj0wjv.jpg"
            titulo="Medias"
            precio={1500}
          />
        </div>
      </div>
      <div className="card">
        <div>
          <ProductCard
            img="https://res.cloudinary.com/dmlcoxrnt/image/upload/v1725808803/medias_animales_hj0wjv.jpg"
            titulo="Medias"
            precio={1500}
          />
        </div>
      </div>
      <div className="card">
        <div>
          <ProductCard
            img="https://res.cloudinary.com/dmlcoxrnt/image/upload/v1725808803/medias_animales_hj0wjv.jpg"
            titulo="Medias"
            precio={1500}
          />
        </div>
      </div>
    </div>
  );
};
