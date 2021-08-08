import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto, updatePhoto } from "features/Photo/slice/PhotoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./styles.scss";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const photos = useSelector((state) => state.photos);
  const photo = photos.find((photo) => photo.id === photoId - 0);
  const isAddMode = !photoId;
  const initialValues = isAddMode
    ? { id: null, title: "", categoryId: null, photo: "" }
    : photo;

  const handleSubmit = (value) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        isAddMode ? dispatch(addPhoto(value)) : dispatch(updatePhoto(value));
        history.push("/photos");
        resolve(true);
      }, 3000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={handleSubmit}
          initialValues={initialValues}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
