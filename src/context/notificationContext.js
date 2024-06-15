import React, { createContext, useState, useContext } from "react";

const NotificationContext = createContext();

export const useNotification = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const [variant, setVariant] = useState("success");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  return (
    <NotificationContext.Provider
      value={{ variant, message, show, setVariant, setMessage, setShow }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
