import React from "react";
import MainNavbar from "./navbar";
import InfoBar from "./infoBar";
import HeroBanner from "./heroBanner";
import Footer from "./footer";

function HomePage() {
  return (
    <div>
      <MainNavbar />
      <InfoBar />
      <HeroBanner />
      <Footer />
    </div>
  );
}

export default HomePage;
