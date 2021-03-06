const nameError = {
  required: "This field is required.",
  minLength: "Atleast 3 character required.",
  maxLength: "Maximum 20 character is allowed.",
};
const emailError = {
  required: "This field is required.",
  pattern:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  message: "Please enter valid email address.",
};

const ageError = {
  required: "This field is required.",
  min: "You are not eligible.",
  max: "You are not eligible",
};

const phoneNoError = {
  required: "This field is required.",
  min: "Please enter 10 digit no",
  max: "Please enter 10 digit no",
};
const password = {
  required: "This field is required.",
  pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  message:
    "require at least 8 character, a symbol,\n upper and lower case letters and a number",
};
const confirmPassword = {
  required: "This field is required.",
  pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  message:
    "require at least 8 character, a symbol, upper and lower case letters and a number",
};

const genderError = {
  required: "This field is required.",
};

export {
  nameError,
  emailError,
  ageError,
  phoneNoError,
  genderError,
  confirmPassword,
  password,
};
