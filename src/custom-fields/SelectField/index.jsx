import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";

const SelectField = (props) => {
  const { field, form, options, label, placeholder, disabled } = props;
  const { name, value } = field;
  const { errors, touched } = form;

  const showError = errors[name] && touched[name];

  const SelectedOption = options.find((option) => option.value === value);

  const handleSelectFieldChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;
    field.onChange({ target: { name: name, value: selectedValue } });
  };

  return (
    <div>
      <FormGroup>
        {label && <Label for="categoryId">Category</Label>}
        <Select
          id={name}
          name={name}
          {...field}
          value={SelectedOption}
          onBlur={() => form.setFieldTouched(name, true)}
          onChange={handleSelectFieldChange}
          options={options}
          disabled={disabled}
          placeholder={placeholder}
          className={showError ? "is-invalid" : ""}
        />
        <ErrorMessage name={name} component={FormFeedback} />
      </FormGroup>
    </div>
  );
};

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

SelectField.defaultProps = {
  type: "text",
  options: [],
  placeholder: "",
  disabled: false,
};

export default SelectField;
