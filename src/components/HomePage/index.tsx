import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Wall } from "../../../public/images";
import styles from "./styles";
const HomePage = () => {
  return (
    <Box>
      <Box sx={styles.heroImg}>
        <Box>
          <Image src={Wall} alt="bg" layout="intrinsic" height="800px" />
        </Box>
        <Box sx={styles.heroImgHeading} component="h1">
          Welcome To Some Place
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
