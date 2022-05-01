import { SxProps } from "@mui/material";

const styles: {
  [key: string]: SxProps;
} = {
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 80px",
    backgroundColor: "#0A1929",
    color: "white",
  },
  logo: {
    fontSize: "42px",
  },
  right: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10%",
  },
  icon: {
    margin: "0 10px",
    fontSize: "large",
  },
};

export default styles;
