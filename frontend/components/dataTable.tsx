"use client";
import filterController from "@/controller/filterController";
import React from "react";
import { observer } from "mobx-react";

const TableHeader = ({ headers }: { headers: string[] }) => (
  <thead>
    <tr>
      {headers.map((header) => (
        <th key={header} className="py-2 px-4 border-b text-center">
          {header}
        </th>
      ))}
    </tr>
  </thead>
);

const TableCell = ({ children }: { children: React.ReactNode }) => <td className="py-2 px-4 border-b text-black text-center">{children}</td>;

const ProgressBar = ({ value, bgColor, barColor }: { value: number; bgColor: string; barColor: string }) => (
  <div className={`w-full ${bgColor} rounded-full h-2.5 mb-1`}>
    <div className={`${barColor} h-2.5 rounded-full`} style={{ width: `${value}%` }}></div>
  </div>
);

interface Item {
  carga: string;
  destino: string;
  box: string;
  data: string;
  status: string;
  tempoDecorrido: string;
  stsSeparacao: string;
  stsStageout: string;
  stsNaoFaturado: string;
  stsFaturado: string;
  paletes: string;
  itens: string;
  caixasGeradas: string;
  caixasSeparadas: string;
  pesSol: string;
  pesSep: string;
  m3: string;
  produtivo: string;
}

const TableRow = ({ item, index }: { item: Item; index: number }) => (
  <tr className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}>
    <TableCell>{item.carga}</TableCell>
    <TableCell>{item.destino}</TableCell>
    <TableCell>{item.box}</TableCell>
    <TableCell>{item.data}</TableCell>
    <TableCell>{item.status}</TableCell>
    <TableCell>
      <ProgressBar value={parseInt(item.tempoDecorrido)} bgColor="bg-gray-200" barColor="bg-blue-600" />
      {item.tempoDecorrido}
    </TableCell>
    <TableCell>
      <ProgressBar value={parseInt(item.stsSeparacao)} bgColor="bg-blue-200" barColor="bg-blue-500" />
      {item.stsSeparacao}
    </TableCell>
    <TableCell>
      <ProgressBar value={parseInt(item.stsStageout)} bgColor="bg-gray-200" barColor="bg-gray-500" />
      {item.stsStageout}
    </TableCell>
    <TableCell>{item.stsNaoFaturado}</TableCell>
    <TableCell>
      <ProgressBar value={parseInt(item.stsFaturado)} bgColor="bg-green-200" barColor="bg-green-500" />
      {item.stsFaturado}
    </TableCell>
    <TableCell>{item.paletes}</TableCell>
    <TableCell>{item.itens}</TableCell>
    <TableCell>{item.caixasGeradas}</TableCell>
    <TableCell>{item.caixasSeparadas}</TableCell>
    <TableCell>{item.pesSol}</TableCell>
    <TableCell>{item.pesSep}</TableCell>
    <TableCell>{item.m3}</TableCell>
    <TableCell>{item.produtivo}</TableCell>
  </tr>
);

interface DataTableProps {
  resultQuery: Item[];
}

const DataTable = observer(({ resultQuery }: DataTableProps) => {
  const headers = ["CARGA", "DESTINO", "BOX", "DATA", "STATUS", "TEMPO DECORRIDO", "STS. SEPARAÇÃO", "STS. STAGEOUT", "STS. NÃO FATURADO", "STS. FATURADO", "PALETES", "ITENS", "CAIXAS GERADAS", "CAIXAS SEPARADAS", "PES. SOL.", "PES. SEP.", "M3", "PRODUTIVO"];

  const { itemsPerPage } = filterController;

  return (
    <div className="overflow-x-auto px-4 ">
      <table className="min-w-full bg-slate-600 rounded-lg">
        <TableHeader headers={headers} />
        <tbody>
          {resultQuery.slice(0, Number(itemsPerPage)).map((item, index) => (
            <TableRow key={item.carga} item={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default DataTable;
