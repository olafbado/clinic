import React from "react";
import logo from "../assets/rehabilitation.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function RehabilitationSection() {
  return (
    <div className="bg-gradient-to-r from-green-500 via-green-300 to-green-500 py-10 lg:py-16 text-white mt-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="flex-1 mb-8 lg:mb-0 lg:mr-8 h-full order-last">
          <img
            src={logo}
            alt="Obrazek rehabilitacji"
            className="w-full rounded-3xl h-full"
          />
        </div>
        <div className="flex-1 lg:text-left text-black lg:order-last">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Rehabilitacje</h2>
          <p className="text-lg lg:text-xl font-semibold mb-3">
            Oferujemy rehabilitację pacjentów obciążonych:
          </p>
          <ul className="text-lg mb-8">
            <li>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="mr-2 text-black"
              />{" "}
              genetycznie
            </li>
            <li>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="mr-2 text-black"
              />{" "}
              ortopedycznie
            </li>
            <li>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="mr-2 text-black"
              />{" "}
              neurologicznie
            </li>
          </ul>
          <p className="text-lg mb-3 font-semibold">
            Rehabilitacje odbywają się w:
          </p>
          <ul className="text-lg mb-8">
            <li>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="mr-2 text-black"
              />{" "}
              poniedziałki: godz. 8.15 - 17.30
            </li>
            <li>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="mr-2 text-black"
              />{" "}
              wtorki: godz. 8.15 - 17.30
            </li>
            <li>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="mr-2 text-black"
              />{" "}
              czwartki: godz. 8.15 - 17.30
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RehabilitationSection;
