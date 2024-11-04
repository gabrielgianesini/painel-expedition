"use client";

import React from "react";

export const SelectField = ({ label, listOptions }: { label: string; listOptions: string[] }) => (
  <div className="flex flex-col gap-2">
    <h3 className="text-white">{label}</h3>
    <select className="bg-white text-black px-2 py-[10px] rounded">
      {listOptions.map((optionName) => {
        return <option key={optionName}>{optionName}</option>;
      })}
    </select>
  </div>
);

export default function Filters() {
  const destinoOptions = ["Destino 1", "Destino 2", "Destino 3"];
  const setorOptions = ["Setor 1", "Setor 2", "Setor 3"];
  const exibirAtrasadoOptions = ["Sim", "Não"];
  const cargaFaturadasOptions = ["Sim", "Não"];
  const crossDockingOptions = ["Sim", "Não"];
  const turnoOptions = ["Manhã", "Tarde", "Noite"];

  return (
    <div className="flex flex-wrap items-center space-x-4">
      <SelectField label="Destino" listOptions={destinoOptions} />
      <SelectField label="Setor" listOptions={setorOptions} />
      <SelectField label="Exibir Atrasado" listOptions={exibirAtrasadoOptions} />
      <SelectField label="Carga Faturadas" listOptions={cargaFaturadasOptions} />
      <SelectField label="Cross Docking" listOptions={crossDockingOptions} />
      <SelectField label="Turno" listOptions={turnoOptions} />
    </div>
  );
}
