import { SxProps } from "@mui/material";
import { relative } from "path";

const styles: {
  [key: string]: SxProps;
} = {
  heroImg: {
    position: "relative",
  },
  heroImgHeading: {
    position: "absolute",
    bottom: "100px",
    left: 0,
    right: 0,
    textAlign: "center",
    color: "white",
  },
};

export default styles;
