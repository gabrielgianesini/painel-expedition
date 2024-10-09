import React from "react";

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

const TableCell = ({ children }: { children: React.ReactNode }) => <td className="py-2 px-4 border-b text-center">{children}</td>;

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
  <tr className={index % 2 === 0 ? "bg-gray-500" : "bg-gray-400"}>
    <TableCell>{item.carga}</TableCell>
    <TableCell>{item.destino}</TableCell>
    <TableCell>{item.box}</TableCell>
    <TableCell>{item.data}</TableCell>
    <TableCell>{item.status}</TableCell>
    <TableCell>{item.tempoDecorrido}</TableCell>
    <TableCell>{item.stsSeparacao}</TableCell>
    <TableCell>{item.stsStageout}</TableCell>
    <TableCell>{item.stsNaoFaturado}</TableCell>
    <TableCell>{item.stsFaturado}</TableCell>
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

export default function DataTable({ resultQuery }: DataTableProps) {
  const headers = ["CARGA", "DESTINO", "BOX", "DATA", "STATUS", "TEMPO DECORRIDO", "STS. SEPARAÇÃO", "STS. STAGEOUT", "STS. NÃO FATURADO", "STS. FATURADO", "PALETES", "ITENS", "CAIXAS GERADAS", "CAIXAS SEPARADAS", "PES. SOL.", "PES. SEP.", "M3", "PRODUTIVO"];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-slate-600">
        <TableHeader headers={headers} />
        <tbody>
          {resultQuery.map((item, index) => (
            <TableRow key={item.carga} item={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
