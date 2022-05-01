import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
const Header = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.left}>
        <Box sx={styles.logo}>SomeBrand</Box>
      </Box>
      <Box sx={styles.right}>
        <Box sx={styles.icon}>
          <AccountCircleIcon fontSize="large" />
        </Box>
        <Box sx={styles.icon}>
          <LoginIcon fontSize="large" />
        </Box>
        <Box sx={styles.icon}>
          <LogoutIcon fontSize="large" />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
