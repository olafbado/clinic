import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "./layout";
import React from "react";
import { Table } from "react-bootstrap";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";
import { OverlayTrigger } from "react-bootstrap";
import { useAuth } from "../context/authContext";
import { Tooltip } from "react-bootstrap";
import { faX } from "@fortawesome/free-solid-svg-icons";

function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const { isLoggedIn, user, setUser } = useAuth();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const renderTooltip = (text) => <Tooltip>{text}</Tooltip>;

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const handleOrderPlacement = () => {
    setUser({
      ...user,
      historicalTests: [
        ...user.historicalTests,

        ...cartItems.flatMap((item) => {
          return {
            name: item.name,
            date: new Date().toLocaleDateString(),
          };
        }),
      ],
    });
    clearCart();
  };

  return (
    <Layout>
      <div className="container mt-5">
        <Link
          to="/laboratoryTests"
          className="btn bg-gray-800 hover:bg-gray-800 mb-3 text-white"
        >
          Powrót do pakietów
        </Link>
        <h4 className="text-2xl font-bold mb-4">Koszyk</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Produkt</th>
              <th>Cena</th>
              <th>Wariant</th>
              <th>Suma</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="flex justify-center align-items-center">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="w-[35px] h-[35px]"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.selectedVariant}</td>
                <td>{item.price}</td>
                <td className="text-center align-middle">
                  <FontAwesomeIcon
                    icon={faX}
                    className="w-[15px] h-[15px] cursor-pointer"
                    onClick={() => handleRemoveFromCart(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="text-end">
          <h5 className="text-lg font-bold mb-4">
            Suma: {calculateTotalPrice()} zł
          </h5>
          {isLoggedIn ? (
            <button
              className="btn bg-green-500 hover:bg-green-500"
              onClick={handleOrderPlacement}
            >
              Złóż zamówienie
            </button>
          ) : (
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip("MUSISZ BYĆ ZALOGOWANY")}
            >
              <button className="btn bg-gray-400 hover:bg-gray-400 !cursor-default">
                Złóż zamówienie
              </button>
            </OverlayTrigger>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default CartPage;
