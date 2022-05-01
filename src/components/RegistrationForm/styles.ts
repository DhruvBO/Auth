import { SxProps } from "@mui/material";

const styles: {
  [key: string]: SxProps;
} = {
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    border: "1px solid #1976D2",
    width: "50%",
    margin: "10px auto",
  },
  inputWrapper: {
    margin: "14px 10px",
  },
  fullWidth: {
    width: "480px",
  },
  halfWidth: {
    maxWidth: "175px",
  },
  btn: {
    marginRight: "20px",
  },
  customStyle: {
    marginRight: "10px",
  },
};

export default styles;
