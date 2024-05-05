import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Container,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import LoginModal from "./loginModal";
import { useAuth } from "./authContext";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function MainNavbar() {
  const [showModal, setShowModal] = useState(false);

  const { isLoggedIn, login, logout } = useAuth();

  const showLoginModal = () => {
    setShowModal(true);
  };

  const handleLogin = () => {
    login();
    setShowModal(false);
  };

  const renderTooltip = () => <Tooltip>PROFIL PACJENTA</Tooltip>;

  return (
    <>
      <Navbar bg="light" expand="md" className="!bg-green-500 p-3">
        <Container>
          <Navbar.Brand>
            <Link className="flex items-center" as={Link} to="/">
              <FontAwesomeIcon
                icon={faHeart}
                className="heart-icon w-[25px] h-[25px]"
              />
              <span className="text-2xl sm:text-3xl ml-3 font-bold">
                Centrum Medyczne
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="!flex justify-between text-lg font-semibold"
          >
            <Nav className="flex lg:gap-14 ml-[70px]">
              <Nav.Link
                as={Link}
                to="/"
                className="hover:underline decoration-gray-800"
              >
                O Nas
              </Nav.Link>
              <NavLink
                to="/schedulePage"
                className={({ isActive }) =>
                  `hover:underline decoration-gray-800 nav-link ${
                    isActive ? "underline" : ""
                  }`
                }
              >
                Harmonogram Przyjęć
              </NavLink>
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
            {isLoggedIn && (
              <OverlayTrigger placement="bottom" overlay={renderTooltip()}>
                <Nav
                  className="border-3 border-gray-800 p-2 rounded-md"
                  as={Link}
                  to="/patientProfile"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-[20px] h-[20px] cursor-pointer"
                  />
                </Nav>
              </OverlayTrigger>
            )}
            <Nav>
              {!isLoggedIn ? (
                <Nav.Link
                  onClick={showLoginModal}
                  className="hover:underline decoration-gray-800"
                >
                  Zaloguj się
                </Nav.Link>
              ) : (
                <div class="flex justify-center align-items-center">
                  <Nav.Link
                    onClick={logout}
                    className="hover:underline decoration-gray-800"
                  >
                    Wyloguj się
                  </Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <LoginModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleLogin={handleLogin}
      />
    </>
  );
}

export default MainNavbar;
