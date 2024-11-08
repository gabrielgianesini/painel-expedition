import React from "react";

import { resultQuery } from "../../mock/query";
import DataTable from "@/components/dataTable";
import InfoCardGrid from "@/components/infoCard";
import LogisticsFilter from "@/components/logisticsFilter";
import StagePercentages from "@/components/stagePercentages";

export default function Home() {
  return (
    <div className="bg-blue-900 min-h-screen w-full">
      <LogisticsFilter />
      <InfoCardGrid />
      <StagePercentages />
      <DataTable resultQuery={resultQuery} />
    </div>
  );
}
