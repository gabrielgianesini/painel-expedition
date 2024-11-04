"use client";
import React from "react";
import Filters, { SelectField } from "./logisticComboBox/filters";

export default function LogisticsFilter() {
  const listLineSeparation = ["25", "50", "100"];

  const handleFilterLoads = () => {};
  const handleFilterSeparationLine = () => {};
  const handleFilterChangeHours = () => {};
  const handleFilterWave = () => {};

  return (
    <div className="p-4 flex flex-wrap items-start justify-between w-full bg-blue-900 gap-2 items-baseline">
      <div className="flex items-baseline flex-col space-y-2">
        <button onClick={handleFilterLoads}>Cargas</button>
        <button onClick={handleFilterSeparationLine}>Linhas de Separação</button>
        <button onClick={handleFilterChangeHours}>Mudar horários</button>
        <button onClick={handleFilterWave}>Onda</button>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="text-white">Produtivos</div>
        <div className="bg-white text-black justify-center flex py-2 rounded">
          <span>15 | 0</span>
        </div>
      </div>
      <div className="flex flex-col  space-y-2">
        <div className="text-white">Data</div>
        <div className="flex items-center space-x-2">
          <input type="text" className="bg-white text-black px-2 py-2 rounded" value="07/10/2024 - 07/10/2024" readOnly />
          <button className="bg-gray-300 text-black px-2 py-2 rounded">Procurar</button>
        </div>
        <SelectField label="Linhas na página" listOptions={listLineSeparation} />
      </div>
      <Filters />
    </div>
  );
}
