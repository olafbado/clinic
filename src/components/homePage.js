import React from "react";
import InfoBar from "./infoBar";
import HeroBanner from "./heroBanner";
import SpecializationsSection from "./specializationsSection";
import RehabilitationSection from "./rehabilitationSection";
import LaboratorySection from "./laboratorySection";
import Layout from "./layout";

function HomePage() {
  return (
    <div>
      <Layout>
        <InfoBar />
        <HeroBanner />
        <SpecializationsSection />
        <RehabilitationSection />
        <LaboratorySection />
      </Layout>
    </div>
  );
}

export default HomePage;
