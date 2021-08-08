import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-fields/InputField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import SelectField from "custom-fields/SelectField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup, Spinner } from "reactstrap";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
  isAddMode: PropTypes.bool,
  initialValues: PropTypes.object,
};

PhotoForm.defaultProps = {
  onSubmit: null,
  isAddMode: false,
  initialValues: { id: null, title: "", categoryId: null, photo: "" },
};

function PhotoForm(props) {
  // npm i --save react-select
  const { isAddMode, initialValues } = props;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This is a required."),

    categoryId: Yup.string().required("This is a required.").nullable(),

    photo: Yup.string().required("This is a required."),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              options={PHOTO_CATEGORY_OPTIONS}
              placeholder="What's your photo category?"
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color={isAddMode ? "primary" : "success"}>
                {isSubmitting && <Spinner color="info" />}
                {isAddMode ? "Add to album" : "Update photo"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
