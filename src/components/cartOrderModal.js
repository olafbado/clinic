import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import MyButton from "./button";
import { PATIENT_DATA } from "../assets/staticData";

function CartOrderModal({ show, handleClose, amount, handleOrderPlacement }) {
  const [name, setName] = useState(PATIENT_DATA.firstName);
  const [surname, setSurname] = useState(PATIENT_DATA.lastName);
  const [street, setStreet] = useState(PATIENT_DATA.street);
  const [zipCode, setZipCode] = useState(PATIENT_DATA.zipCode);
  const [city, setCity] = useState(PATIENT_DATA.city);
  const [email, setEmail] = useState(PATIENT_DATA.email);
  const [phoneNumber, setPhoneNumber] = useState(PATIENT_DATA.phoneNumber);
  const [blik, setBlik] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("BLIK");
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const placeOrder = () => {
    handleOrderPlacement();
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="bg-myGray">
        <Modal.Title className="text-xl font-semibold">
          Dane płatności
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="flex">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Imię</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Nazwisko</Form.Label>
              <Form.Control
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="flex">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Ulica</Form.Label>
              <Form.Control
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Kod pocztowy</Form.Label>
              <Form.Control
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Miasto</Form.Label>
            <Form.Control
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Adres email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Numer telefonu</Form.Label>
            <Form.Control
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Sposób płatności</Form.Label>
            <Form.Control
              as="select"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <option value="BLIK">BLIK</option>
              <option value="Karta płatnicza">Karta płatnicza</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{DetermineText(paymentMethod)}</Form.Label>
            <Form.Control
              type="text"
              value={blik}
              onChange={(e) => setBlik(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Kwota: {amount}</Form.Label>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="p-2 flex justify-between bg-myGray">
        <MyButton
          className="!px-4 bg-green-500 hover:bg-green-500"
          handleClose={placeOrder}
        >
          Kupuję i płacę
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

const DetermineText = (text) => {
  switch (text) {
    case "BLIK":
      return "Kod blik";
    case "Karta płatnicza":
      return "Numer karty płatniczej";
    default:
      return "";
  }
};

export default CartOrderModal;
