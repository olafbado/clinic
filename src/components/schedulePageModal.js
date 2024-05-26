import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import MyButton from "./button";
import Toast from "react-bootstrap/Toast";
import { useSchedule } from "../context/scheduleContext";

function SchedulePageModal({ show, handleClose, doctor }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showErrorModal, setshowErrorModal] = useState(false);
  const toggleShowErrorModal = () => setshowErrorModal(!showErrorModal);
  const { addAppointment } = useSchedule();

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  console.log(doctor);

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
      addAppointment({
        date: selectedDay,
        time: selectedTimeFormatted,
        doctorId: doctor.id,
      });
    } else {
      setshowErrorModal(true);
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
        <MyButton className="!px-4" handleClose={handleSubmit}>
          Zapisz
        </MyButton>
        <MyButton className="!px-4" handleClose={handleClose}>
          Anuluj
        </MyButton>
      </Modal.Footer>
      <Toast
        show={showErrorModal}
        onClose={toggleShowErrorModal}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
        }}
      >
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2 mr-0 ml-auto"
            alt=""
          />
        </Toast.Header>
        <Toast.Body className="bg-red-200">
          Niepoprawna data lub godzina.
        </Toast.Body>
      </Toast>
    </Modal>
  );
}

export default SchedulePageModal;
