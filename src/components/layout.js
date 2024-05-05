import React from "react";
import MainNavbar from "./navbar";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div>
      <MainNavbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
