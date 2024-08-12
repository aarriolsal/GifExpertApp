import PropTypes from "prop-types";

export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img
        data-testid="test-image"
        className="card-image"
        src={url}
        alt={title}
      />
      <p data-testid="test-text" className="card-text">
        {title}
      </p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
