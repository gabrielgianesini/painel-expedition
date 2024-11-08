import React from "react";
import DataTable from "@/components/body/dataTable";
import InfoCardGrid from "@/components/header/infoCard";
import StagePercentages from "@/components/header/stagePercentages";
import LogisticsFilter from "@/components/header/logisticsFilter";
import searchDataController from "@/controller/searchData";

export default function Home() {
  return (
    <div className="bg-blue-900 min-h-screen w-full">
      <LogisticsFilter />
      <InfoCardGrid />
      <StagePercentages />
      <DataTable resultQuery={searchDataController.data} />
    </div>
  );
}
