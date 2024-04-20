import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function InfoBar() {
  return (
    <div className=" p-3">
      <div className="container flex flex-col gap-3 lg:flex-row justify-evenly">
        <div className="flex flex-col justify-center">
          <p className="font-semibold">Lokalizacja:</p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> ul.
            Stawiki 123, 00-000 Tokyo
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-semibold">Godziny otwarcia: </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            Poniedziałek - Piątek: 9:00 - 20:00
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-semibold">Rejestracja pod numerem: </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +48 123 456 789 | +48 987 654 321
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoBar;
