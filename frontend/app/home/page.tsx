import React from "react";

import { resultQuery } from "../../mock/query";
import DataTable from "@/components/dataTable";
import InfoCardGrid from "@/components/infoCard";
import LogisticsFilter from "@/components/logisticsFilter";

export default function Home() {
  return (
    <div className="bg-blue-900 min-h-screen w-full">
      <LogisticsFilter />
      <InfoCardGrid />
      <DataTable resultQuery={resultQuery} />
    </div>
  );
}
