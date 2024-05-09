import React, { useState } from "react";
import Layout from "./layout";
import { useAuth } from "./authContext";
import { Card, Button, Form } from "react-bootstrap";
import { PATIENT_DATA, DOCTORS } from "../assets/staticData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PatientProfilePage() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    window.location.href = "/";
  }

  const [patientData, setPatientData] = useState(PATIENT_DATA);

  const updatePatientData = (newData) => {
    setPatientData({ ...patientData, ...newData });
  };

  return (
    <div>
      <Layout>
        <h4 className="text-2xl font-bold mb-4">Profil Pacjenta</h4>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="text-lg font-semibold">
                  Dane osobowe
                </Card.Title>
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
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="text-lg font-semibold">
                  Historia medyczna
                </Card.Title>
                <Card.Text className="flex flex-col gap-2">
                  <p>
                    <strong>Choroby:</strong>{" "}
                    {patientData.medicalHistory.join(", ")}
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
          </div>
          <div className="col-lg-4 col-md-12 mb-4">
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
          </div>
          <div className="col-lg-4 col-md-12 mb-4 -mt-[200px]">
            <Card>
              <Card.Body>
                <Card.Title className="text-lg font-semibold">
                  Nadchodzące wizyty
                </Card.Title>
                <ul>
                  {patientData.upcomingAppointments.map((visit, index) => {
                    const doctor = DOCTORS.find(
                      (doctor) => doctor.id === visit.doctorId
                    );
                    return (
                      <li key={index}>
                        <FontAwesomeIcon icon={doctor.icon} /> {doctor.name}
                        <br />
                        <strong>Data:</strong> {visit.date},{" "}
                        <strong>Godzina:</strong> {visit.time}
                      </li>
                    );
                  })}
                </ul>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-12 mb-4 -mt-[300px]">
            <Card>
              <Card.Body>
                <Card.Title className="text-lg font-semibold">
                  Przeszłe wizyty
                </Card.Title>
                <ul>
                  {patientData.pastAppointments.map((visit, index) => {
                    const doctor = DOCTORS.find(
                      (doctor) => doctor.id === visit.doctorId
                    );
                    return (
                      <li key={index}>
                        <FontAwesomeIcon icon={doctor.icon} /> {doctor.name}
                        <br />
                        <strong>Data:</strong> {visit.date},{" "}
                        <strong>Godzina:</strong> {visit.time}
                      </li>
                    );
                  })}
                </ul>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default PatientProfilePage;
