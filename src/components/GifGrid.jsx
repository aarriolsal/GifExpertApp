import { useFetch } from "../hooks/useFetch";
import { GifItem } from "./GifItem";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const { info: images, isLoading } = useFetch(category);

  return (
    <>
      <h3 data-testid="test-category" className="category-text">
        {category}
      </h3>
      {isLoading && (
        <h2 data-testid="test-loading" className="loading">
          Cargando...
        </h2>
      )}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
