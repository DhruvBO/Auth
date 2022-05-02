import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";
import { useAppSelector } from "../../redux/store";
const Profile = () => {
  const user = useAppSelector((state) => state.userSlice);

  return (
    <Box sx={styles.profileCard}>
      <Box sx={styles.heading}>Profile</Box>
      <Box sx={styles.userInfo}>
        <Box sx={styles.leftOpt}>Name: </Box>
        <Box>
          {user.fName} {user?.mName} {user.lName}
        </Box>
      </Box>
      <Box sx={styles.userInfo}>
        <Box sx={styles.leftOpt}>Email: </Box>
        <Box>{user.email}</Box>
      </Box>
      <Box sx={styles.userInfo}>
        <Box sx={styles.leftOpt}>Gender: </Box>
        <Box>{user.gender}</Box>
      </Box>
      <Box sx={styles.userInfo}>
        <Box sx={styles.leftOpt}>Age: </Box>
        <Box>{user.age}</Box>
      </Box>
      <Box sx={styles.userInfo}>
        <Box sx={styles.leftOpt}>Phone: </Box>
        <Box>{user.pNo}</Box>
      </Box>
    </Box>
  );
};

export default Profile;
