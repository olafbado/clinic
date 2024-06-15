import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage";
import SchedulePage from "./components/schedulePage";
import { AuthProvider } from "./context/authContext";
import { ScheduleProvider } from "./context/scheduleContext";
import { CartProvider } from "./context/cartContext";
import PatientProfilePage from "./components/patientProfilePage";
import LaboratoryTestsPage from "./components/laboratoryTestsPage";
import LaboratoryTestDetailsPage from "./components/laboratoryTestDetailPage";
import CartPage from "./components/cartPage";
import BlogPage from "./components/blogPage";
import BlogDetailsPage from "./components/blogDetailPage";
import TestResultsPage from "./components/testResultsPage";
import { NotificationProvider } from "./context/notificationContext";
import Notification from "./components/notification";

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <ScheduleProvider>
          <CartProvider>
            <div className="bg-gray-200 h-full oveflow-auto">
              <Notification />
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/schedulePage" element={<SchedulePage />}></Route>
                <Route
                  path="/patientProfile"
                  element={<PatientProfilePage />}
                />
                <Route
                  path="/laboratoryTests"
                  element={<LaboratoryTestsPage />}
                />
                <Route
                  path="/laboratoryTests"
                  element={<LaboratoryTestsPage />}
                />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogDetailsPage />} />
                <Route
                  path="/laboratoryTest/:id"
                  element={<LaboratoryTestDetailsPage />}
                />
                <Route path="/testResults" element={<TestResultsPage />} />
              </Routes>
            </div>
          </CartProvider>
        </ScheduleProvider>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
