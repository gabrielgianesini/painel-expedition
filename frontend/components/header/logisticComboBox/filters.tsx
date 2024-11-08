"use client";

import React from "react";
import { observer } from "mobx-react";
import filterController from "../../../controller/filterController";

interface SelectFieldProps {
  label: string;
  listOptions: string[];
  value: string;
  onChange: (value: string) => void;
}

export const SelectField: React.FC<SelectFieldProps> = ({ label, listOptions, value, onChange }) => (
  <label className="flex flex-col gap-2">
    <h3 className="text-white">{label}</h3>
    <select className="bg-white text-black px-2 py-[10px] min-w-44 rounded" value={value} onChange={(e) => onChange(e.target.value)}>
      {listOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
);

const Filter = observer(() => {
  const destinoOptions = ["Todos", "Destino 1", "Destino 2", "Destino 3"];
  const setorOptions = ["Todos", "Setor 1", "Setor 2", "Setor 3"];
  const exibirAtrasadoOptions = ["Sim", "Não"];
  const cargaFaturadasOptions = ["Sim", "Não"];
  const crossDockingOptions = ["Sim", "Não"];
  const turnoOptions = ["Todos", "Manhã", "Tarde", "Noite"];

  return (
    <div className="flex flex-wrap items-center space-x-4">
      <SelectField label="Destino" listOptions={destinoOptions} value={filterController.destination} onChange={filterController.setDestination} />
      <SelectField label="Setor" listOptions={setorOptions} value={filterController.sector} onChange={filterController.setSector} />
      <SelectField label="Exibir Atrasado" listOptions={exibirAtrasadoOptions} value={filterController.showDelayed} onChange={filterController.setShowDelayed} />
      <SelectField label="Carga Faturadas" listOptions={cargaFaturadasOptions} value={filterController.billedLoad} onChange={filterController.setBilledLoad} />
      <SelectField label="Cross Docking" listOptions={crossDockingOptions} value={filterController.crossDocking} onChange={filterController.setCrossDocking} />
      <SelectField label="Turno" listOptions={turnoOptions} value={filterController.shift} onChange={filterController.setShift} />
    </div>
  );
});

export default Filter;
