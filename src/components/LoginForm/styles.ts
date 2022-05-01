import { SxProps } from "@mui/material";

const styles: {
  [key: string]: SxProps;
} = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    border: "1px solid #1976D2",
    width: "45%",
    margin: "20vh auto",
  },
  inputWrapper: {
    margin: "20px 10px",
  },
  customStyle: {
    minWidth: "350px",
  },
  btn: {
    marginRight: "20px",
  },
  signUp: {
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    gap: "2%",
  },
  signUpLink: {
    color: "#1976D2",
  },
};

export default styles;
