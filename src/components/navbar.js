import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Container,
  Tooltip,
  OverlayTrigger,
  Badge,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import LoginModal from "./loginModal";
import { useAuth } from "../context/authContext";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/cartContext";

function MainNavbar() {
  const [showModal, setShowModal] = useState(false);

  const { isLoggedIn, login, logout } = useAuth();

  const { cartItems } = useCart();

  const showLoginModal = () => {
    setShowModal(true);
  };

  const handleLogin = () => {
    login();
    setShowModal(false);
  };

  const renderTooltip = (text) => <Tooltip>{text}</Tooltip>;

  return (
    <>
      <Navbar bg="light" expand="xl" className="!bg-green-500 p-3">
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
            <Nav className="flex lg:gap-10 ml-[70px]">
              <Nav.Link
                as={Link}
                to="/"
                className="hover:underline decoration-gray-800 flex justify-center align-items-center"
              >
                O Nas
              </Nav.Link>
              <NavLink
                to="/schedulePage"
                className={({ isActive }) =>
                  `hover:underline decoration-gray-800 nav-link flex justify-center align-items-center ${
                    isActive ? "underline" : ""
                  }`
                }
              >
                Harmonogram Przyjęć
              </NavLink>
              <Nav.Link
                as={Link}
                to="/laboratoryTests"
                className="hover:underline decoration-gray-800 flex justify-center align-items-center"
              >
                Pakiety Badań Laboratoryjnych
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/blog"
                className="hover:underline decoration-gray-800 flex justify-center align-items-center"
              >
                Blog
              </Nav.Link>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("KOSZYK")}
              >
                <Nav.Link
                  className="decoration-gray-800 flex justify-center align-items-center relative"
                  as={Link}
                  to="/cart"
                >
                  {cartItems.length > 0 && (
                    <Badge
                      pill
                      bg="secondary"
                      className="absolute top-0 right-0 p-[3px]"
                    >
                      {cartItems.length}
                    </Badge>
                  )}
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="w-[20px] h-[20px] cursor-pointer border-3 border-gray-800 p-1 rounded-md"
                  />
                </Nav.Link>
              </OverlayTrigger>
              {isLoggedIn && (
                <OverlayTrigger
                  placement="bottom"
                  overlay={renderTooltip("PROFIL PACJENTA")}
                >
                  <Nav.Link
                    className="border-3 border-gray-800 p-2 rounded-md flex justify-center align-items-center"
                    as={Link}
                    to="/patientProfile"
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="w-[20px] h-[20px] cursor-pointer border-3 border-gray-800 p-1 rounded-md"
                    />
                  </Nav.Link>
                </OverlayTrigger>
              )}
              {!isLoggedIn ? (
                <Nav.Link
                  onClick={showLoginModal}
                  className="hover:underline decoration-gray-800"
                >
                  Zaloguj się
                </Nav.Link>
              ) : (
                <Nav.Link
                  onClick={logout}
                  className="hover:underline decoration-gray-800 flex justify-center align-items-center"
                >
                  Wyloguj się
                </Nav.Link>
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
