import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import { PATIENT_DATA } from "../assets/staticData";
import Layout from "./layout";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const TestResultsPage = () => {
  const [selectedTest, setSelectedTest] = useState(null);

  const handleTestClick = (test) => {
    setSelectedTest(test);
  };

  const generateChartData = (results) => {
    if (!results) return {};
    const labels = Object.keys(results);
    const data = Object.values(results);
    return {
      labels: labels,
      datasets: [
        {
          label: "Wyniki Badań",
          data: data,
          backgroundColor: "rgba(75, 192, 192, 0.4)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <Layout>
      <Container className="mt-4">
        <h4 className="text-2xl font-bold mb-4">Wyniki Badań</h4>
        <Row>
          <Col md={3}>
            <ListGroup>
              {PATIENT_DATA.historicalTests.map((test, index) => (
                <ListGroup.Item
                  action
                  key={index}
                  onClick={() => handleTestClick(test)}
                >
                  {test.date} - {test.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={9}>
            {selectedTest ? (
              <Card>
                <Card.Body>
                  <Card.Title>Szczegóły Badania</Card.Title>
                  <Card.Text>
                    <strong>Data:</strong> {selectedTest.date}
                  </Card.Text>
                  <Card.Text>
                    <strong>Nazwa Badania:</strong> {selectedTest.name}
                  </Card.Text>
                  <Bar data={generateChartData(selectedTest.results)} />
                  <Card.Text>
                    <strong>Wynik:</strong> {selectedTest.result}
                  </Card.Text>
                  <Card.Text>
                    <strong>Komentarz Lekarza:</strong>{" "}
                    {selectedTest.doctorComment}
                  </Card.Text>
                </Card.Body>
              </Card>
            ) : (
              <p>Wybierz badanie z listy, aby zobaczyć szczegóły.</p>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default TestResultsPage;
