import React from "react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => <h2 className="text-white">{children}</h2>;

const SelectField = ({ label }: { label: string }) => (
  <div className="flex flex-col">
    <h3 className="text-white">{label}</h3>
    <select className="bg-white text-black px-2 py-1 rounded">
      <option>Todos</option>
    </select>
  </div>
);

export default function LogisticsFilter() {
  return (
    <div className="p-4 flex flex-wrap items-start justify-between w-full bg-blue-900">
      <div className="flex flex-col space-y-2">
        <SectionTitle>Cargas</SectionTitle>
        <SectionTitle>Linhas de Separação</SectionTitle>
        <SectionTitle>Mudar horários</SectionTitle>
        <SectionTitle>Onda</SectionTitle>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="text-white">Produtivos</div>
        <div className="bg-white text-black px-2 py-1 rounded">15 | 0</div>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <div className="text-white">Produtivos</div>
        <div className="flex items-center space-x-2">
          <input type="text" className="bg-white text-black px-2 py-1 rounded" value="07/10/2024 - 07/10/2024" readOnly />
          <button className="bg-gray-300 text-black px-2 py-1 rounded">Procurar</button>
        </div>
        <div className="text-white">Linhas na página</div>
        <input type="text" className="bg-white text-black px-2 py-1 rounded" value="50" readOnly />
      </div>
      <div className="flex flex-wrap items-center space-x-4">
        <SelectField label="Destino" />
        <SelectField label="Setor" />
        <SelectField label="Exibir Atrasado" />
        <SelectField label="Carga Faturadas" />
        <SelectField label="Cross Docking" />
        <SelectField label="Turno" />
      </div>
    </div>
  );
}
