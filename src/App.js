import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage";
import SchedulePage from "./components/schedulePage";
import { AuthProvider } from "./components/authContext";
import PatientProfilePage from "./components/patientProfilePage";
import LaboratoryTestsPage from "./components/laboratoryTestsPage";
import LaboratoryTestDetailsPage from "./components/laboratoryTestDetailPage";

function App() {
  return (
    <AuthProvider>
      <div className="bg-gray-200 h-full oveflow-auto">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/schedulePage" element={<SchedulePage />}></Route>
          <Route path="/patientProfile" element={<PatientProfilePage />} />
          <Route path="/laboratoryTests" element={<LaboratoryTestsPage />} />
          <Route path="/laboratoryTests" element={<LaboratoryTestsPage />} />
          <Route
            path="/laboratoryTest/:id"
            element={<LaboratoryTestDetailsPage />}
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
