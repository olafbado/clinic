import React from "react";
import MainNavbar from "./navbar";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div>
      <MainNavbar />
      <div className="container mt-8 mb-12">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
