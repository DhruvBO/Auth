import { Box } from "@mui/system";
import React, { FC } from "react";
import Header from "../components/Header";
type layoutProps = {
  children: React.ReactNode;
};
const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
