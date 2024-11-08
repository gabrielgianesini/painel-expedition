"use client";
import React from "react";
import { observer } from "mobx-react";
import infoCardStore from "@/controller/InfoCardStore";

interface InfoCardProps {
  title: string;
  value: number | string;
}

const InfoCardComponent: React.FC<InfoCardProps> = observer(({ title, value }) => (
  <div className="bg-red-500 justify-center text-white p-4 rounded flex flex-col items-center h-20 min-w-44 flex-grow">
    <span className="text-xl font-bold">{title}</span>
    <span className="text-lg font-medium">{value}</span>
  </div>
));

const InfoCardGrid: React.FC = observer(() => (
  <div className="flex flex-wrap gap-4 mb-4 mx-4">
    {infoCardStore.dataInfoCard.map((item) => (
      <InfoCardComponent key={item.title} title={item.title} value={item.value} />
    ))}
  </div>
));

export default InfoCardGrid;
