// use Alert from bootstrap to create reusable notification component
//

import React from "react";
import { Alert } from "react-bootstrap";
import { useNotification } from "../context/notificationContext";

function Notification() {
  const { variant, message, show, setShow } = useNotification();
  console.log(show);
  return (
    show && (
      <Alert className="fixed top-5 right-5 z-50" variant={variant}>
        {message}
        <div className="mt-3 d-flex justify-content-end">
          <button onClick={() => setShow(false)} variant="outline-success">
            Zamknij
          </button>
        </div>
      </Alert>
    )
  );
}

export default Notification;
