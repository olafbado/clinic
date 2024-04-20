import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainNavbar from "./navbar";
import Footer from "./footer";
import {
  faStethoscope,
  faMicroscope,
  faHeartbeat,
  faTooth,
  faBrain,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons";

const doctors = [
  {
    id: 1,
    name: "Dr. Jan Kowalski",
    specialization: "Pediatra",
    days: "Poniedziałek - Piątek",
    hours: "08:00 - 16:00",
    icon: faStethoscope,
  },
  {
    id: 2,
    name: "Dr. Anna Nowak",
    specialization: "Laryngolog",
    days: "Poniedziałek - Piątek",
    hours: "09:00 - 17:00",
    icon: faMicroscope,
  },
  {
    id: 3,
    name: "Dr. Michał Wiśniewski",
    specialization: "Kardiolog",
    days: "Środa - Piątek",
    hours: "10:00 - 18:00",
    icon: faHeartbeat,
  },
  {
    id: 4,
    name: "Dr. Elżbieta Dąbrowska",
    specialization: "Stomatolog",
    days: "Wtorek - Środa",
    hours: "11:00 - 19:00",
    icon: faTooth,
  },
  {
    id: 5,
    name: "Dr. Piotr Nowakowski",
    specialization: "Neurolog",
    days: "Czwartek ",
    hours: "12:00 - 20:00",
    icon: faBrain,
  },

  {
    id: 7,
    name: "Dr. Adam Nowak",

    specialization: "Chirurg",
    days: "Czwartek - Piątek",
    hours: "14:00 - 22:00",
    icon: faUserMd,
  },
];

function SchedulePage() {
  return (
    <div>
      <MainNavbar />
      <div className="container mt-8 mb-12">
        <h4 className="text-2xl font-bold mb-4">Harmonogram Przyjęć</h4>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {doctors.map((doctor) => (
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
      <Footer />
    </div>
  );
}

export default SchedulePage;
