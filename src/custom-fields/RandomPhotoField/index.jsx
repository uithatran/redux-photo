import RandomPhoto from "components/RandomPhoto";
import React from "react";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";

function RandomPhotoField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;
  const { errors, touched } = form;
  const ShowError = errors[name] && touched[name];

  const handleImageUrlChange = (imageUrl) => {
    form.setFieldValue(name, imageUrl);
  };

  return (
    <FormGroup>
      <Label for="categoryId">{label}</Label>
      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />
      <div className={ShowError ? "is-invalid" : ""}></div>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

RandomPhotoField.propTypes = {
  form: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

RandomPhotoField.defaultProps = {
  form: null,
  field: null,
  label: "Photo",
};

export default RandomPhotoField;
