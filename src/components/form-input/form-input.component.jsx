import {
  Group,
  FormInputElement,
  FormInputLabel,
} from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    // -> we spread the input's "otherProps" so that we can apply
    // all the props that the caller passes to the FormInput,
    // which can vary
    <Group>
      <FormInputElement {...otherProps} />

      {/* -> if the label exists */}
      {label && (
        /* -> if the user has typed something in the input then shrink the label */
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
