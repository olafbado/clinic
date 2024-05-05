import React, { useState } from "react";
import Layout from "./layout";
import { useAuth } from "./authContext";
import { Card, Button, Form } from "react-bootstrap";

function PatientProfilePage() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    window.location.href = "/";
  }

  const [patientData, setPatientData] = useState({
    firstName: "Jan",
    lastName: "Kowalski",
    birthDate: "1980-01-01",
    gender: "Mężczyzna",
    phoneNumber: "123-456-789",
    address: "ul. Testowa 123, 00-000 Warszawa",
    email: "jan.kowalski@example.com",
    medicalHistory: ["Hiperlipidemia", "Nadciśnienie tętnicze"],
    medications: ["Atorwastatyna", "Ramipryl"],
    surgeries: ["Usunięcie wyrostka robaczkowego (2010)"],
  });

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
          {/* Karta z historią medyczną */}
          <div className="col-lg-4 col-md-6 mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="text-lg font-semibold">
                  Historia medyczna
                </Card.Title>
                <Card.Text>
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
          {/* Formularz do aktualizacji danych */}
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
                      // inne pola formularza
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
                  </Form.Group>
                  {/* Pozostałe pola formularza */}
                  <Button type="submit">Aktualizuj dane</Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default PatientProfilePage;
