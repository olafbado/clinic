import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DOCTORS } from "../assets/staticData";

function SpecializationsSection() {
  return (
    <div className="container mx-auto mt-8 mb-20">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Współpracujemy z lekarzami różnych specjalizacji, takich jak:
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {DOCTORS.map((spec) => (
          <div
            key={spec.specialization}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center hover:shadow-xl transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon
              icon={spec.icon}
              className="text-gray-500 w-[75px] h-[75px]"
            />
            <span className="text-lg mt-2">{spec.specialization}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecializationsSection;
