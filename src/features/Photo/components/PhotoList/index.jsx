import React from "react";
import PropTypes from "prop-types";
import PhotoCard from "../PhotoCard";
import { Col, Row } from "reactstrap";

function PhotoList(props) {
  const { photos, onEditClick, onRemoveClick } = props;

  return (
    <Row>
      {photos.map((photo) => (
        <Col key={photo.title} xs="12" md="6" lg="4">
          <PhotoCard
            photo={photo}
            onEditClick={onEditClick}
            onRemoveClick={onRemoveClick}
          />
        </Col>
      ))}
    </Row>
  );
}

PhotoList.propTypes = {
  photos: PropTypes.array,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

PhotoList.defaultProps = {
  photos: [],
  onEditClick: {},
  onRemoveClick: {},
};

export default PhotoList;
