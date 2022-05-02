import { Box, Link } from "@mui/material";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useRouter } from "next/router";
import { storeUserData } from "../../redux/actions";
const Header = () => {
  const user = useAppSelector((state) => state.userSlice);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [userLoggedIn, setLoginStatus] = useState(false);

  useEffect(() => {
    if (user.isLoggedIn) {
      setLoginStatus(true);
    }
  }, [user.isLoggedIn]);

  const logout = () => {
    const { isLoggedIn, ...rest } = user;
    Object.keys(rest).forEach((i) => (rest[i] = ""));
    const removeData: object = { ...rest, isLoggedIn: false };
    console.log(removeData);
    dispatch(storeUserData(removeData));
    setLoginStatus(false);
    router.push("/auth/login");
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.left}>
        <Box sx={styles.logo}>SomeBrand</Box>
      </Box>
      <Box sx={styles.right}>
        {userLoggedIn ? (
          <>
            <Link href="/profile" sx={styles.link}>
              <Box sx={styles.icon}>
                <AccountCircleIcon fontSize="large" />
              </Box>
            </Link>
            <Box sx={styles.icon} onClick={() => logout()}>
              <LogoutIcon fontSize="large" />
            </Box>
          </>
        ) : (
          <Link href="/auth/login" sx={styles.link}>
            <Box sx={styles.icon}>
              <LoginIcon fontSize="large" />
            </Box>
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default Header;
