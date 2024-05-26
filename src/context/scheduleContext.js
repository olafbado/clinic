import React, { createContext, useState, useContext } from "react";
import { PATIENT_DATA } from "../assets/staticData";

const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
  const [appointments, setAppointments] = useState(
    PATIENT_DATA.upcomingAppointments
  );

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <ScheduleContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export const useSchedule = () => {
  return useContext(ScheduleContext);
};
