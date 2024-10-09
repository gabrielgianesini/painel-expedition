import React from "react";

export default function LogisticsFilter() {
  return (
    <div className=" p-4 flex items-start w-100 justify-between">
      <div className="flex flex-col">
        <h2 className="text-white">Cargas</h2>
        <h2 className="text-white">Linhas de Separação</h2>
        <h2 className="text-white">Mudar horários</h2>
        <h2 className="text-white">Onda</h2>
      </div>
      <div className="flex flex-col">
        <div className="text-white">Produtivos</div>
        <div className="bg-white text-black px-2 py-1 rounded">15 | 0</div>
      </div>
      <div className="flex flex-col items-center space-x-4">
        <div className="text-white">Produtivos</div>
        <div className="flex  items-center space-x-2">
          <input type="text" className="bg-white text-black px-2 py-1 rounded" value="07/10/2024 - 07/10/2024" readOnly />
          <button className="bg-gray-300 text-black px-2 py-1 rounded">Procurar</button>
        </div>
        <div className="text-white">Linhas na página</div>
        <input type="text" className="bg-white text-black px-2 py-1 rounded" value="50" readOnly />
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex flex-col">
          <h3 className="text-white">Destino</h3>
          <select className="bg-white text-black px-2 py-1 rounded">
            <option>Todos</option>
          </select>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white">Setor</h3>
          <select className="bg-white text-black px-2 py-1 rounded">
            <option>Todos</option>
          </select>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white">Exibir Atrasado</h3>
          <select className="bg-white text-black px-2 py-1 rounded">
            <option>Todos</option>
          </select>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white">Carga Faturadas</h3>
          <select className="bg-white text-black px-2 py-1 rounded">
            <option>Todos</option>
          </select>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white">Cross Docking</h3>
          <select className="bg-white text-black px-2 py-1 rounded">
            <option>Todos</option>
          </select>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white">Turno</h3>
          <select className="bg-white text-black px-2 py-1 rounded">
            <option>Todos</option>
          </select>
        </div>
      </div>
    </div>
  );
}
