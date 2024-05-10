import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { LAB_TESTS } from "../assets/staticData";
import Layout from "./layout";
import { Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { useState } from "react";

function LaboratoryTestDetailsPage() {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const test = LAB_TESTS.find((test) => test.id === parseInt(id));
  const [selectedVariant, setSelectedVariant] = useState(
    test ? test.variants[0] : ""
  );

  if (!test) {
    return <div>Nie znaleziono badania.</div>;
  }

  const relatedTests = LAB_TESTS.filter(
    (relatedTest) =>
      relatedTest.category === test.category && relatedTest.id !== test.id
  );

  const handleAddToCart = () => {
    if (cartItems.find((item) => item.id === test.id)) {
      addToCart({
        ...test,
        id: test.id + 1,
        selectedVariant,
      });
    } else {
      addToCart({
        ...test,
        selectedVariant,
      });
    }
  };

  const handleVariantChange = (event) => {
    setSelectedVariant(event.target.value);
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
        <div className="row">
          <div className="col-lg-4">
            <Card className="h-full">
              <Card.Body className="flex justify-center align-items-center">
                <FontAwesomeIcon
                  icon={test.icon}
                  className="w-[150px] h-[150px] text-gray-500"
                />
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-8">
            <div className="card shadow">
              <div className="card-body">
                <h2 className="card-title mb-3 text-xl font-semibold">
                  {test.name}
                </h2>
                <p className="card-text mb-3">Cena: {test.price} PLN</p>
                <div className="mb-3">
                  <strong>Dostępne warianty:</strong>
                  <Form.Select onChange={handleVariantChange}>
                    {test.variants.map((variant) => (
                      <option value={variant}>{variant}</option>
                    ))}
                  </Form.Select>
                  <ul></ul>
                </div>
                <button
                  className="btn bg-green-500 hover:bg-green-500 mb-3"
                  onClick={handleAddToCart}
                >
                  Dodaj do koszyka
                </button>
                <h2 className="card-title mb-3 text-xl font-semibold">Opis:</h2>
                <p className="card-text">{test.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div>
            <h3 className="text-2xl font-semibold my-3">Podobne produkty:</h3>
            <div className="row">
              {relatedTests.map((test) => (
                <div key={test.id} className="col-lg-4 col-md-6 mb-4">
                  <Card className="bg-white rounded-lg shadow-md p-4 flex items-center hover:shadow-xl transition duration-300 ease-in-out">
                    <Card.Body className="text-center">
                      <FontAwesomeIcon
                        icon={test.icon}
                        className="w-[65px] h-[65px] text-gray-500"
                      />
                      <Card.Title className="text-lg font-semibold mb-1">
                        {test.name}
                      </Card.Title>
                      <Card.Text className="mb-0">
                        Cena: {test.price} PLN
                      </Card.Text>
                      <Link
                        to={`/laboratoryTest/${test.id}`}
                        className="btn bg-green-500 hover:bg-green-500 mt-3"
                      >
                        Zobacz więcej
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LaboratoryTestDetailsPage;
