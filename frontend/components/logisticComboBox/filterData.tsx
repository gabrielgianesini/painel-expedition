"use client";

import React from "react";
import { observer } from "mobx-react";
import filterController from "../../controller/filterController";

const FilterData = observer(() => {
  const { startDate, endDate, setEndDate, setStartDate } = filterController;

  const handleSearch = () => {
    if (startDate && endDate && isValidDate(startDate) && isValidDate(endDate)) {
      filterController.setStartDate(startDate);
      filterController.setEndDate(endDate);
    } else {
      alert("Please enter valid dates.");
    }
  };

  const isValidDate = (date: Date) => {
    return !isNaN(date.getTime());
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value ? new Date(e.target.value) : null;
    if (newDate && isValidDate(newDate)) {
      newDate.setDate(newDate.getDate() + 1); // Adiciona um dia
      setStartDate(newDate);
    }
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value ? new Date(e.target.value) : null;
    if (newDate && isValidDate(newDate)) {
      newDate.setDate(newDate.getDate() + 1); // Adiciona um dia
      setEndDate(newDate);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-white">Data</div>
      <div className="flex items-center space-x-2">
        <input type="date" className="bg-white text-black px-2 py-2 rounded" value={startDate ? formatDate(startDate) : ""} onChange={handleStartDateChange} />
        <input type="date" className="bg-white text-black px-2 py-2 rounded" value={endDate ? formatDate(endDate) : ""} onChange={handleEndDateChange} />
        <button className="bg-gray-300 text-black px-2 py-2 rounded" onClick={handleSearch}>
          Procurar
        </button>
      </div>
    </div>
  );
});

export default FilterData;
