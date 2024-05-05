import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DOCTORS } from "../assets/staticData";
import Layout from "./layout";

function SchedulePage() {
  return (
    <div>
      <Layout>
        <div className="container mt-8 mb-12">
          <h4 className="text-2xl font-bold mb-4">Harmonogram Przyjęć</h4>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
            {DOCTORS.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-lg shadow-md p-4 flex items-center hover:shadow-xl transition duration-300 ease-in-out"
              >
                <div className="mr-4">
                  <FontAwesomeIcon
                    icon={doctor.icon}
                    className="text-gray-500 text-3xl"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{doctor.name}</h2>
                  <p className="text-gray-600">{doctor.specialization}</p>
                  <p className="text-gray-600">Dzień: {doctor.days}</p>
                  <p className="text-gray-600">Godziny: {doctor.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default SchedulePage;
