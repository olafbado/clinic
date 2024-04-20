import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage";
import SchedulePage from "./components/schedulePage";

function App() {
  return (
    <div className="bg-gray-200 h-full oveflow-auto">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/schedulePage" element={<SchedulePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
