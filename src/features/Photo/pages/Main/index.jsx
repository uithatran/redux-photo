import Banner from "components/Banner";
import Images from "constants/images";
import PhotoList from "features/Photo/components/PhotoList";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import PropTypes from "prop-types";
import { removePhoto } from "features/Photo/slice/PhotoSlice";

MainPage.propTypes = {
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEditClick = (photo) => {
    history.push(`/photos/${photo.id}`);
  };

  const handleRemoveClick = (photo) => {
    const action = removePhoto(photo);
    dispatch(action);
  };

  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
        <PhotoList
          photos={photos}
          onEditClick={handleEditClick}
          onRemoveClick={handleRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
