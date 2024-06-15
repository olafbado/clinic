import React from "react";
import { Modal, Form } from "react-bootstrap";
import MyButton from "./button";

function LoginModal({ show, handleClose, handleLogin }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="bg-myGray">
        <Modal.Title className="text-xl font-semibold">Zaloguj się</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Adres email</Form.Label>
            <Form.Control type="email" placeholder="Wpisz email..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Hasło</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Zapamiętaj mnie" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="p-2 flex justify-between bg-myGray">
        <MyButton
          className="!px-4 bg-green-500 hover:bg-green-500"
          handleClose={handleLogin}
        >
          Zaloguj
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

export default LoginModal;
