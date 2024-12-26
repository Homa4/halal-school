export const DEFAULT_COLOR = "#ff9500";

export const DEFAULT_WAI_ARIA_ATTRIBUTE = {
  "aria-busy": true,
  role: "progressbar",
};

// Define a plain JavaScript object to represent styles
export const Style = {};

// PrimaryProps as a plain JavaScript object for default prop values
export const PrimaryProps = {
  height: undefined,
  width: undefined,
  ariaLabel: undefined,
  wrapperStyle: {},
  wrapperClass: "",
  visible: true,
};

// BaseProps extends PrimaryProps with additional properties
export const BaseProps = {
  ...PrimaryProps,
  color: DEFAULT_COLOR,
};
