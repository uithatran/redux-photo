import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./RandomPhoto.scss";

function RandomPhoto(props) {
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;

  const getRandomImageUrl = () => {
    const randomNumber = Math.floor(Math.random() * 2000) + 1;
    return `https://picsum.photos/id/${randomNumber}/600/300`;
  };

  const handleRandomPhotoClick = () => {
    const randomImageUrl = getRandomImageUrl();
    onImageUrlChange(randomImageUrl);
  };
  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button
          outline
          color="primary"
          name={name}
          onClick={handleRandomPhotoClick}
          onBlur={onRandomButtonBlur}
        >
          Random a photo
        </Button>
      </div>
      <div className="random-photo__photo">
        {imageUrl && <img src={imageUrl} alt="Ooops ... not found!!!"></img>}
      </div>
    </div>
  );
}

RandomPhoto.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
  name: "",
  imageUrl: "https://picsum.photos/id/123/600/300",
  onImageUrlChange: null,
  onRandomButtonBlur: null,
};

export default RandomPhoto;
