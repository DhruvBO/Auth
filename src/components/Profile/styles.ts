import { SxProps } from "@mui/material";

const styles: {
  [key: string]: SxProps;
} = {
  profileCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "left",
    flexDirection: "column",
    border: "1px solid #1976D2",
    flexBasis: "45%",
    width: "400px",
    padding: "20px 25px",
    margin: "10vh auto",
  },
  heading: {
    marginBottom: "15px",
    fontSize: "24px",
    fontWeight: "600",
  },
  userInfo: {
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    marginBottom: "10px",
  },
  leftOpt: {
    fontWeight: 600,
    marginRight: "8px",
  },
};

export default styles;
