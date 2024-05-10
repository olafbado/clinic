import React, { useState } from "react";
import { FormControl, InputGroup, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Layout from "./layout";
import { LAB_TESTS } from "../assets/staticData";

function LaboratoryTestsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTests, setFilteredTests] = useState(LAB_TESTS);
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = LAB_TESTS.filter(
      (test) =>
        test.name.toLowerCase().includes(searchTerm) &&
        (selectedCategory === "Wszystkie"
          ? true
          : test.category === selectedCategory)
    );
    setFilteredTests(filtered);
  };

  const handleCategoryFilter = (e) => {
    const category = e.target.innerText;

    const filtered = LAB_TESTS.filter((test) => test.category === category);
    if (category === "Wszystkie") {
      setSelectedCategory("Wszystkie");
      setFilteredTests(LAB_TESTS);
    } else {
      setSelectedCategory(category);
      setFilteredTests(filtered);
    }
  };

  return (
    <div>
      <Layout>
        <h4 className="text-2xl font-bold mb-4">
          Pakiety badań laboratoryjnych
        </h4>

        <InputGroup className="mb-4 w-[80%] mx-auto h-[50px]">
          <InputGroup.Text id="search-addon">
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
          <FormControl
            placeholder="Wyszukaj badanie..."
            aria-label="Wyszukaj badanie"
            aria-describedby="search-addon"
            value={searchTerm}
            onChange={handleSearch}
          />
        </InputGroup>

        <div class="flex gap-4">
          <div className="basis-1/5">
            <div className="mb-4">
              <h5 className="text-xl font-bold mb-2">Kategorie pakietów</h5>
              <ListGroup className="text-lg">
                <ListGroup.Item action onClick={handleCategoryFilter}>
                  Wszystkie
                </ListGroup.Item>
                <ListGroup.Item action onClick={handleCategoryFilter}>
                  Nerki
                </ListGroup.Item>
                <ListGroup.Item action onClick={handleCategoryFilter}>
                  Krew
                </ListGroup.Item>
                <ListGroup.Item action onClick={handleCategoryFilter}>
                  Układu moczowy
                </ListGroup.Item>
                <ListGroup.Item action onClick={handleCategoryFilter}>
                  Serce
                </ListGroup.Item>
                <ListGroup.Item action onClick={handleCategoryFilter}>
                  Zaburzenia hormonalne
                </ListGroup.Item>
                <ListGroup.Item action onClick={handleCategoryFilter}>
                  Wątroba
                </ListGroup.Item>
                <ListGroup.Item action onClick={handleCategoryFilter}>
                  Cukrzyca
                </ListGroup.Item>
                <ListGroup.Item action onClick={handleCategoryFilter}>
                  Witaminy
                </ListGroup.Item>
                <ListGroup.Item action onClick={handleCategoryFilter}>
                  Ogólne
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
          <div className="row basis-4/5">
            {filteredTests.map((test) => (
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
      </Layout>
    </div>
  );
}

export default LaboratoryTestsPage;
