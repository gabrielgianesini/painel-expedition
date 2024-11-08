"use client";
import React from "react";
import { observer } from "mobx-react-lite";
import { twMerge } from "tailwind-merge";
import stageExpeditionStore from "@/controller/stageExpedition";

const colors = {
  Separação: { color: "bg-blue-500", colorBg: "bg-blue-200" },
  "Saída Gradual": { color: "bg-gray-500", colorBg: "bg-gray-200" },
  "Não Faturados": { color: "bg-yellow-500", colorBg: "bg-yellow-200" },
  Faturados: { color: "bg-green-500", colorBg: "bg-green-200" },
};

type StageDescription = keyof typeof colors;

const PercentageView: React.FC<{ description: StageDescription; percentage: number }> = ({ description, percentage }) => {
  const { color, colorBg } = colors[description];

  return (
    <div className={twMerge("w-full h-6 rounded-full overflow-hidden", colorBg)}>
      <div className={twMerge("h-full rounded-full", color)} style={{ width: `${percentage}%`, background: color }}>
        <div className="absolute w-full font-bold text-center text-black">
          {description} - {percentage}%
        </div>
      </div>
    </div>
  );
};

const StagePercentages: React.FC = observer(() => {
  return (
    <div className="flex w-full px-4 pb-4 gap-2">
      {stageExpeditionStore.stages.map((stage) => (
        <div key={stage.description} className="relative flex-1">
          <PercentageView description={stage.description as StageDescription} percentage={stage.percentage} />
        </div>
      ))}
    </div>
  );
});

export default StagePercentages;
