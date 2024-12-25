/* eslint-disable no-unused-vars */
function Input(props) {
  const {
    updateName,
    className,
    type,
    id,
    required,
    value,
    maxLength,
    placeholder,
    aria_label,
    onChange,
  } = props;

  return (
    <input
      type={type}
      className={className}
      id={id}
      required={required}
      defaultValue={value}
      maxLength={maxLength}
      placeholder={placeholder}
      aria-label={aria_label}
      onChange={onChange}
    />
  );
}

export default Input;
