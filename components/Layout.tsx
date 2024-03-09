import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
