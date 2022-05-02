import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputField from "../sections/Input/Index";
import Link from "next/link";
import styles from "./styles";
import { emailError, password } from "../../constants/formErrorMessage";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useRouter } from "next/router";
import { storeUserData } from "../../redux/actions";
const LoginForm = () => {
  const { control, handleSubmit, watch, setValue, reset } = useForm({
    mode: "onChange",
  });

  const storedUser = useAppSelector((state) => state.registrationFormSlice);
  const user = useAppSelector((state) => state.userSlice);
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user.isLoggedIn) {
      router.push("/", null, { shallow: true });
    }
  }, []);

  const onSubmitForm = (formData: any) => {
    const userInfo = storedUser.filter(
      ({ email, pwd }) => email === formData.email && pwd === formData.pwd
    );
    if (userInfo.length) {
      const { pwd, cpwd, ...rest } = userInfo[0];
      console.log({ ...rest });
      const data = { ...rest, isLoggedIn: true };
      dispatch(storeUserData(data));
      console.log({ ...rest, isLoggedIn: true });
      router.push("/");
    }
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
              customStyle={{ ...styles.customStyle }}
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
