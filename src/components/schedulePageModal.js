import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import MyButton from "./button";
import { useSchedule } from "../context/scheduleContext";
import Notification from "./notification";
import { useNotification } from "../context/notificationContext";

function SchedulePageModal({ show, handleClose, doctor }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showErrorModal, setshowErrorModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const { addAppointment } = useSchedule();

  const { setVariant, setMessage, setShow } = useNotification();

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = () => {
    const selectedDay = new Date(selectedDate).toLocaleString("pl-PL", {
      weekday: "long",
    });
    const doctorDays = doctor.days.split(" - ").map((day) => day.toLowerCase());
    const doctorHours = doctor.hours
      .split(" - ")
      .map((time) => time.replace(":", ""));

    const selectedTimeFormatted = selectedTime.replace(":", "");

    if (
      doctorDays.includes(selectedDay.toLowerCase()) &&
      selectedTimeFormatted >= doctorHours[0] &&
      selectedTimeFormatted <= doctorHours[1]
    ) {
      setshowErrorModal(false);
      handleClose();
      setShow(true);
      setVariant("success");
      setMessage("Wizyta zapisana pomyślnie.");
      addAppointment({
        date: selectedDay,
        time: selectedTimeFormatted,
        doctorId: doctor.id,
      });
    } else {
      setShow(true);
      setVariant("danger");
      setMessage("Niepoprawna data lub godzina.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="bg-myGray">
        <Modal.Title className="text-xl font-semibold">
          Umów wizytę z {doctor.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Wybierz datę</Form.Label>
            <Form.Control
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTime">
            <Form.Label>Wybierz godzinę</Form.Label>
            <Form.Control
              type="time"
              value={selectedTime}
              onChange={handleTimeChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="p-2 flex justify-between bg-myGray">
        <MyButton
          className="!px-4 bg-green-500 hover:bg-green-500"
          handleClose={handleSubmit}
        >
          Zapisz
        </MyButton>
        <MyButton
          className="!px-4 bg-gray-400 hover:bg-gray-400"
          handleClose={handleClose}
        >
          Anuluj
        </MyButton>
      </Modal.Footer>
    </Modal>
  );
}

export default SchedulePageModal;
