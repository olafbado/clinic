import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DOCTORS } from "../assets/staticData";
import Layout from "./layout";
import SchedulePageModal from "./schedulePageModal";
import { Tooltip } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { useAuth } from "../context/authContext";

function SchedulePage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setDoctor] = useState({});
  const { isLoggedIn } = useAuth();

  const showScheduleModal = (doctor) => {
    setShowModal(true);
    setDoctor(doctor);
  };

  const renderTooltip = (text) => <Tooltip>{text}</Tooltip>;

  return (
    <div>
      <Layout>
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
              {isLoggedIn ? (
                <button
                  className="btn bg-green-500 hover:bg-green-500 mr-0 ml-auto"
                  onClick={() => showScheduleModal(doctor)}
                >
                  Umów wizytę
                </button>
              ) : (
                <OverlayTrigger
                  placement="bottom"
                  overlay={renderTooltip("MUSISZ BYĆ ZALOGOWANY")}
                >
                  <button className="btn bg-gray-400 hover:bg-gray-400 !cursor-default mr-0 ml-auto">
                    Umów wizytę
                  </button>
                </OverlayTrigger>
              )}
            </div>
          ))}
        </div>
      </Layout>
      <SchedulePageModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        doctor={selectedDoctor}
      />
    </div>
  );
}

export default SchedulePage;
