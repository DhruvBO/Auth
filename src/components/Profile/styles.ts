import { SxProps } from "@mui/material";

const styles: {
  [key: string]: SxProps;
} = {
  profileCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    border: "1px solid red",
    flexBasis: "45%",
    width: "fit-content",
  },
  userInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default styles;
