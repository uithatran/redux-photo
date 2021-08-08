import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./PhotoCard.scss";

function PhotoCard(props) {
  const { photo, onEditClick, onRemoveClick } = props;
  return (
    <div className="photo-card">
      <img src={photo.photo} alt="https://picsum.photos/id/237/200/300" />
      <div className="photo-card__overlay">
        <h3 className="photo-card__title">{photo.title}</h3>
        <div className="photo-card__actions">
          <div>
            <Button
              outline
              size="sm"
              color="primary"
              onClick={() => onEditClick(photo)}
            >
              Edit
            </Button>
          </div>
          <div>
            <Button
              outline
              size="sm"
              color="danger"
              onClick={() => onRemoveClick(photo)}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

PhotoCard.propTypes = {
  photo: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

PhotoCard.defaultProps = {
  photo: {},
  onEditClick: {},
  onRemoveClick: {},
};

export default PhotoCard;
