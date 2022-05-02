import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputField from "../sections/Input/Index";
import styles from "./styles";
import SelectField from "../sections/SelectField";
import TextArea from "../sections/TextAreaAutoSize";
import {
  ageError,
  emailError,
  genderError,
  nameError,
  phoneNoError,
  confirmPassword,
  password,
} from "../../constants/formErrorMessage";
import { registrationData } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useRouter } from "next/router";
const RegisterationForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const storedUser = useAppSelector((state) => state.registrationFormSlice);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.userSlice);
  useEffect(() => {
    if (user.isLoggedIn) {
      router.push("/");
    }
  }, []);

  const watchItems = watch();
  const checkPass = () => {
    if (watchItems.pwd !== watchItems.cpwd) {
      setError(
        "cpwd",
        { type: "password", message: "password doenot matched" },
        { shouldFocus: true }
      );
    }
  };
  const onSubmitForm = (formData: any) => {
    checkPass();
    if (storedUser.every(({ email }) => email !== formData.email)) {
      dispatch(registrationData(formData));
      router.push("/auth/login");
    } else {
      setError(
        "email",
        { type: "custom", message: "Email alreadt taken" },
        { shouldFocus: true }
      );
    }
  };

  return (
    <Box sx={styles.wrapper}>
      <Box component="h1" sx={styles.inputField}>
        SignUp
      </Box>
      <Box sx={styles.form}>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Box sx={styles.inputWrapper}>
            <InputField
              customStyle={styles.customStyle}
              control={control}
              name="fName"
              label="Name"
              type="text"
              rules={{
                required: {
                  value: true,
                  message: nameError.required,
                },
                minLength: {
                  value: 3,
                  message: nameError.minLength,
                },
                maxLength: {
                  value: 20,
                  message: nameError.maxLength,
                },
              }}
            />
            {/* </Box>
          <Box sx={styles.inputWrapper}> */}
            <InputField
              customStyle={styles.customStyle}
              control={control}
              name="mName"
              label="Middle Name"
              type="text"
              rules={{
                minLength: {
                  value: 3,
                  message: nameError.minLength,
                },
                maxLength: {
                  value: 20,
                  message: nameError.maxLength,
                },
              }}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <InputField
              customStyle={styles.fullWidth}
              control={control}
              name="lName"
              label="Last Name"
              type="text"
              rules={{
                required: {
                  value: true,
                  message: nameError.required,
                },
                minLength: {
                  value: 3,
                  message: nameError.minLength,
                },
                maxLength: {
                  value: 20,
                  message: nameError.maxLength,
                },
              }}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <InputField
              customStyle={{ ...styles.fullWidth }}
              control={control}
              name="email"
              label="Email"
              type="email"
              rules={{
                required: {
                  value: true,
                  message: emailError.required,
                },
                pattern: {
                  value: emailError.pattern,
                  message: emailError.message,
                },
              }}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <InputField
              customStyle={styles.customStyle}
              control={control}
              name="age"
              label="Age"
              type="number"
              rules={{
                required: {
                  value: true,
                  message: ageError.required,
                },
                min: {
                  value: 10,
                  message: ageError.min,
                },
                max: {
                  value: 100,
                  message: ageError.max,
                },
              }}
            />
            <InputField
              customStyle={styles.inputField}
              control={control}
              name="pNo"
              label="Phone Number"
              type="number"
              rules={{
                required: {
                  value: true,
                  message: phoneNoError.required,
                },
                min: {
                  value: 1000000000,
                  message: phoneNoError.min,
                },
                max: {
                  value: 9999999999,
                  message: phoneNoError.max,
                },
              }}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <SelectField
              customStyle={styles.fullWidth}
              control={control}
              name="gender"
              label="Gender"
              menuOptions={[
                {
                  value: "Male",
                  label: "Male",
                },
                {
                  value: "Female",
                  label: "Female",
                },
                {
                  value: "Other",
                  label: "Other",
                },
              ]}
              rules={{
                required: {
                  value: true,
                  message: genderError.required,
                },
              }}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <TextArea
              customStyle={styles.fullWidth}
              control={control}
              multiline={true}
              name="address"
              label="Full Address"
              type="text"
              minRows={10}
              rules={{
                required: {
                  value: true,
                  message: "This field is required.",
                },
                minLength: {
                  value: 20,
                  message: "Atleast 20 character required",
                },
                maxLength: {
                  value: 150,
                  message: "Maximum 150 character is allowed.",
                },
              }}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <InputField
              customStyle={{ ...styles.fullWidth }}
              control={control}
              name="pwd"
              label="Password"
              type="password"
              rules={{
                required: {
                  value: true,
                  message: password.required,
                },
                pattern: {
                  value: password.pattern,
                  message: password.message,
                },
              }}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <InputField
              customStyle={{ ...styles.fullWidth }}
              control={control}
              name="cpwd"
              label="Confirm Password"
              type="password"
              rules={{
                required: {
                  value: true,
                  message: confirmPassword.required,
                },
                pattern: {
                  value: confirmPassword.pattern,
                  message: confirmPassword.message,
                },
              }}
            />
          </Box>
          <Box sx={styles.inputWrapper}>
            <Button sx={styles.btn} type="submit" variant="contained">
              Submit
            </Button>
            <Button
              sx={styles.btn}
              onClick={() => reset()}
              variant="outlined"
              type="reset"
            >
              Reset
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default RegisterationForm;
