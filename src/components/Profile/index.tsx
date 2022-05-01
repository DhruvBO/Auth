import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";
const Profile = () => {
  return (
    <Box sx={styles.profileCard}>
      <Box sx={styles.heading}>heading Here</Box>
      <Box sx={styles.userInfo}>
        <Box>Name: </Box>
        <Box>Full Name Here</Box>
      </Box>
      <Box sx={styles.userInfo}>
        <Box>Name: </Box>
        <Box>Full Name Here</Box>
      </Box>
      <Box sx={styles.userInfo}>
        <Box>Name: </Box>
        <Box>Full Name Here</Box>
      </Box>
      <Box sx={styles.userInfo}>
        <Box>Name: </Box>
        <Box>Full Name Here</Box>
      </Box>
    </Box>
  );
};

export default Profile;
