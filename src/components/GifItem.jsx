import PropTypes from "prop-types";

export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img className="card-image" src={url} alt={title} />
      <p className="card-text">{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};
