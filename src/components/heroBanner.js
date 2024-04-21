import React from "react";
import logo from "../assets/heroBanner.jpg";
import { Link } from "react-router-dom";

function HeroBanner() {
  return (
    <div className="bg-gradient-to-r from-green-500 from-10% via-green-300 via-30% to-green-500 to-90% py-10 lg:py-16 text-white">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="flex-1 text-center lg:text-left text-black order-last lg:mr-5">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Profesjonalne Centrum Medyczne
          </h1>
          <p className="text-lg lg:text-xl mb-8">
            Pacjenci mogą u nas skorzystać z konsultacji lekarskich, terapii
            fizjoterapeutycznej, wykonać badania laboratoryjne, obliterację
            teleangiektazji żylnych (pajączków), badania USG, UKG (echo serca)
            czy EKG.
          </p>
          <Link
            to="/schedulePage"
            className="bg-white text-green-500 py-2 px-6 rounded-full text-lg font-bold uppercase hover:border-gray-800 border-3 border-green-500"
          >
            Harmonogram Przyjęć
          </Link>
        </div>
        <div className="flex-1 mb-8 lg:mb-0 lg:order-last">
          <img
            src={logo}
            alt="Przychodnia HeroBanner"
            className="w-full rounded-3xl mt-8 lg:mt-0"
          />
        </div>
      </div>
    </div>
  );
}
export default HeroBanner;
