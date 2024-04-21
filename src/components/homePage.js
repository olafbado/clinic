import React from "react";
import MainNavbar from "./navbar";
import InfoBar from "./infoBar";
import HeroBanner from "./heroBanner";
import Footer from "./footer";
import SpecializationsSection from "./specializationsSection";

function HomePage() {
  return (
    <div>
      <MainNavbar />
      <InfoBar />
      <HeroBanner />
      <SpecializationsSection />
      <Footer />
    </div>
  );
}

export default HomePage;
