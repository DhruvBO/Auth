import { Box } from "@mui/system";
import type { NextPage } from "next";
import HomePage from "../src/components/HomePage";
import Header from "../src/components/Header";

const Home: NextPage = () => {
  return (
    <Box>
      <HomePage />
    </Box>
  );
};

export default Home;
