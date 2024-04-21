import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <Navbar bg="light" expand="md" className="!bg-green-500 p-3">
      <Container>
        <Navbar.Brand>
          <Link className="flex items-center" as={Link} to="/">
            <FontAwesomeIcon
              icon={faHeart}
              className="heart-icon w-[25px] h-[25px]"
            />
            <span className="text-3xl ml-3 font-bold">Centrum Medyczne</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="flex justify-center text-lg font-semibold"
        >
          <Nav className="flex lg:gap-14">
            <Nav.Link
              as={Link}
              to="/"
              className="hover:underline decoration-gray-800"
            >
              O Nas
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/schedulePage"
              className="hover:underline decoration-gray-800"
            >
              Harmonogram Przyjęć
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/"
              className="hover:underline decoration-gray-800"
            >
              Pakiety Badań Laboratoryjnych
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/"
              className="hover:underline decoration-gray-800"
            >
              Kontakt
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
