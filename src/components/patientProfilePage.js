import React, { useState } from "react";
import Layout from "./layout";
import { useAuth } from "../context/authContext";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { DOCTORS, LAB_TESTS } from "../assets/staticData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PatientProfilePage() {
  const { isLoggedIn, user: patientData, setUser } = useAuth();

  if (!isLoggedIn) {
    window.location.href = "/";
  }

  const updatePatientData = (newData) => {
    setUser({ ...patientData, ...newData });
  };

  return (
    <div>
      <Layout>
        <h4 className="text-2xl font-bold mb-4">Profil Pacjenta</h4>
        <Row>
          <Col className="flex flex-col gap-3">
            <Information patientData={patientData} />
            <MedicalHistory patientData={patientData} />
          </Col>
          <Col className="flex flex-col gap-3">
            <UpcomingAppointments patientData={patientData} />
            <PastAppointments patientData={patientData} />
            <HistoricalTests patientData={patientData} />
          </Col>
          <Col className="flex flex-col gap-3">
            <UpdateInformation
              patientData={patientData}
              updatePatientData={updatePatientData}
            />
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

function HistoricalTests({ patientData }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-lg font-semibold">
          Historia zakupów
        </Card.Title>
        <ul className="flex flex-col gap-2">
          {patientData.historicalTests.map((historicalTest) => {
            console.log(patientData);
            const test = LAB_TESTS.find(
              (test) => test.name === historicalTest.name
            );
            return (
              <li>
                <FontAwesomeIcon icon={test.icon} /> {test.name}
                <br />
                <strong>Data:</strong> {historicalTest.date}
              </li>
            );
          })}
        </ul>
      </Card.Body>
    </Card>
  );
}

function Information({ patientData }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-lg font-semibold">Dane osobowe</Card.Title>
        <Card.Text className="flex flex-col gap-2">
          <p>
            <strong>Imię:</strong> {patientData.firstName}
          </p>
          <p>
            <strong>Nazwisko:</strong> {patientData.lastName}
          </p>
          <p>
            <strong>Data urodzenia:</strong> {patientData.birthDate}
          </p>
          <p>
            <strong>Płeć:</strong> {patientData.gender}
          </p>
          <p>
            <strong>Numer telefonu:</strong> {patientData.phoneNumber}
          </p>
          <p>
            <strong>Adres:</strong> {patientData.address}
          </p>
          <p>
            <strong>Email:</strong> {patientData.email}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function MedicalHistory({ patientData }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-lg font-semibold">
          Historia medyczna
        </Card.Title>
        <Card.Text className="flex flex-col gap-2">
          <p>
            <strong>Choroby:</strong> {patientData.medicalHistory.join(", ")}
          </p>
          <p>
            <strong>Leki:</strong> {patientData.medications.join(", ")}
          </p>
          <p>
            <strong>Zabiegi chirurgiczne:</strong>{" "}
            {patientData.surgeries.join(", ")}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function UpdateInformation({ patientData, updatePatientData }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-lg font-semibold">
          Aktualizacja danych
        </Card.Title>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const newData = {
              firstName: formData.get("firstName"),
              lastName: formData.get("lastName"),
              birthDate: formData.get("birthDate"),
              phoneNumber: formData.get("phoneNumber"),
              email: formData.get("email"),
            };
            updatePatientData(newData);
          }}
        >
          <Form.Group>
            <Form.Label>Imię:</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              defaultValue={patientData.firstName}
            />
            <Form.Label>Nazwisko:</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              defaultValue={patientData.lastName}
            />
            <Form.Label>Data urodzenia:</Form.Label>
            <Form.Control
              type="date"
              name="birthDate"
              defaultValue={patientData.birthDate}
            />
            <Form.Label>Numer telefonu:</Form.Label>
            <Form.Control
              type="text"
              name="phoneNumber"
              defaultValue={patientData.phoneNumber}
            />
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              defaultValue={patientData.email}
            />
          </Form.Group>
          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-500 border-0 mt-3"
          >
            Aktualizuj dane
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

function UpcomingAppointments({ patientData }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-lg font-semibold">
          Nadchodzące wizyty
        </Card.Title>
        <ul className="flex flex-col gap-2">
          {patientData.upcomingAppointments.map((visit, index) => {
            const doctor = DOCTORS.find(
              (doctor) => doctor.id === visit.doctorId
            );
            return (
              <li key={index}>
                <FontAwesomeIcon icon={doctor.icon} /> {doctor.name}
                <br />
                <strong>Data:</strong> {visit.date}, <strong>Godzina:</strong>{" "}
                {visit.time}
              </li>
            );
          })}
        </ul>
      </Card.Body>
    </Card>
  );
}

function PastAppointments({ patientData }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-lg font-semibold">
          Przeszłe wizyty
        </Card.Title>
        <ul className="flex flex-col gap-2">
          {patientData.pastAppointments.map((visit, index) => {
            const doctor = DOCTORS.find(
              (doctor) => doctor.id === visit.doctorId
            );
            return (
              <li key={index}>
                <FontAwesomeIcon icon={doctor.icon} /> {doctor.name}
                <br />
                <strong>Data:</strong> {visit.date}, <strong>Godzina:</strong>{" "}
                {visit.time}
              </li>
            );
          })}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default PatientProfilePage;
