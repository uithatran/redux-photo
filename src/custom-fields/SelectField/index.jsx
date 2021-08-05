import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { FormGroup, Label } from "reactstrap";

const SelectField = (props) => {
  const { field, options, label, placeholder } = props;
  const { name, value } = field;
  console.log(field);
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
          onChange={handleSelectFieldChange}
          options={options}
          // disabled={disabled}
          placeholder={placeholder}
        />
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
  // disabled: PropTypes.bool,
};

SelectField.defaultProps = {
  type: "text",
  options: [],
  placeholder: "",
  // disabled: false,
};

export default SelectField;
