import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputField from "../sections/Input/Index";
import Link from "next/link";
import styles from "./styles";
import { emailError, nameError } from "../../constants/formErrorMessage";
const LoginForm = () => {
  const { control, handleSubmit, watch, setValue, reset } = useForm({
    mode: "onChange",
  });

  const onSubmitForm = (formData: any) => {
    console.log(formData);
  };

  return (
    <Box sx={styles.wrapper}>
      <Box component="h1" sx={styles.inputField}>
        Login
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
          </Box>

          <Box sx={styles.inputWrapper}>
            <InputField
              customStyle={{ ...styles.customStyle }}
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
            <Button sx={styles.btn} type="submit" variant="contained">
              Login
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
        <Box sx={{ ...styles.signUp, ...styles.inputWrapper }}>
          <Box component="p">Don&rsquo;t you have an account?</Box>
          <Link href="/auth/register">
            <Box component="p" sx={styles.signUpLink}>
              Sign up
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
