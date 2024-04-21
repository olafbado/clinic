import React from "react";
import logo from "../assets/laboratory.jpg";

function LaboratorySection() {
  return (
    <div className="py-10 lg:py-16 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="flex-1 text-center lg:text-right text-black mb-8 lg:mb-0 lg:mr-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Laboratoria Analityczne
          </h2>
          <p className="text-lg lg:text-xl mb-8">
            Jesteśmy oficjalnym punktem pobrań Laboratoriów Analitycznych, które
            w swojej ofercie mają wiele różnych badań.
          </p>
          <p className="text-lg lg:text-xl mb-8">
            Wyniki badań laboratoryjnych pozwoliły także wielu Pacjentom podjąć
            skuteczne działania w celu ochrony swojego zdrowia i życia.
          </p>
          <p className="text-lg lg:text-xl mb-8">
            Dokładność i rzetelność wydawanych wyników badań jest dla nas sprawą
            priorytetową. Korzystamy z nowoczesnego sprzętu laboratoryjnego, aby
            czuli się Państwo bezpiecznie i komfortowo.
          </p>
          <p className="text-lg lg:text-xl mb-8">
            Zapraszamy do skorzystania z naszych usług!
          </p>
          <button className="bg-white text-green-500 py-2 px-6 rounded-full text-lg font-bold uppercase hover:border-gray-800 border-3 border-green-500">
            Sprawdź pakiety badań
          </button>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={logo}
            alt="Laboratoria Analityczne"
            className="w-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default LaboratorySection;
