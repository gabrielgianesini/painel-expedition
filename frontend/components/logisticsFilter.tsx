"use client";
import React from "react";
import { observer } from "mobx-react-lite";
import Filters, { SelectField } from "./logisticComboBox/filters";
import FilterData from "./logisticComboBox/filterData";
import { FiAlignJustify } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { LuWaves } from "react-icons/lu";
import filterController from "@/controller/filterController";

const LogisticsFilter: React.FC = () => {
  const listLineSeparation = ["20", "40", "80"];

  const handleFilterLoads = () => {};
  const handleFilterSeparationLine = () => {};
  const handleFilterChangeHours = () => {};
  const handleFilterWave = () => {};

  return (
    <div className="p-4 flex flex-wrap w-full bg-blue-900 gap-8 items-baseline">
      <div className="flex items-baseline gap-8 max-w-[40%]">
        <div className="flex  flex-col min-w-44 space-y-2">
          <button className="flex items-center gap-1" onClick={handleFilterLoads}>
            <FiAlignJustify />
            Cargas
          </button>
          <button className="flex items-center gap-1" onClick={handleFilterSeparationLine}>
            <FiAlignJustify />
            Linhas de Separação
          </button>
          <button className="flex items-center gap-1" onClick={handleFilterChangeHours}>
            <FaRegClock />
            Mudar horários
          </button>
          <button className="flex items-center gap-1" onClick={handleFilterWave}>
            <LuWaves />
            Onda
          </button>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-white">Produtivos</span>
          <div className="bg-white text-black justify-center flex py-2 rounded">
            <span>15 | 0</span>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <FilterData />
          <SelectField label="Linhas na página" listOptions={listLineSeparation} value={filterController.itemsPerPage} onChange={filterController.setItemsPerPage} />
        </div>
      </div>
      <Filters />
    </div>
  );
};

export default observer(LogisticsFilter);
