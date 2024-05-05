import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage";
import SchedulePage from "./components/schedulePage";
import { AuthProvider } from "./components/authContext";
import PatientProfilePage from "./components/patientProfilePage";

function App() {
  return (
    <AuthProvider>
      <div className="bg-gray-200 h-full oveflow-auto">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/schedulePage" element={<SchedulePage />}></Route>
          <Route path="/patientProfile" element={<PatientProfilePage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
