import React from "react";

interface InfoCardProps {
  title: string;
  value: number | string;
}

const InfoCardComponent: React.FC<InfoCardProps> = ({ title, value }) => (
  <div className="bg-red-500 text-white p-4 rounded flex flex-col items-center">
    <span className="text-sm font-medium">{title}</span>
    <span className="text-lg font-bold">{value}</span>
  </div>
);

const dataInfoCard = [
  { title: "Cargas", value: 144 },
  { title: "Faturadas", value: 98 },
  { title: "Separação", value: 46 },
  { title: "Paletes", value: "1.247" },
  { title: "Paletes Faturados", value: 614 },
  { title: "Paletes Fechados", value: 514 },
  { title: "Itens", value: "9.777" },
  { title: "Caixas Geradas", value: "67.068" },
  { title: "Caixas Separadas", value: 0 },
];

const InfoCardGrid: React.FC = () => (
  <div className="grid grid-cols-4 gap-4 mb-4">
    {dataInfoCard.map((item) => (
      <InfoCardComponent key={item.title} title={item.title} value={item.value} />
    ))}
  </div>
);

export default InfoCardGrid;
