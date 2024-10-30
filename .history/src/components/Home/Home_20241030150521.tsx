"use client";
import React from "react";
import SearchableSelect from "../Atoms/SearchableSelect";

type Props = {};

export default function Home({}: Props) {
  const options = [
    { label: "Albania", value: "AL" },
    { label: "United States", value: "US" },
    { label: "Canada", value: "CA" },
  ];
  const handleSelect = (option: { label: string; value: string }) => {
    alert(`Selected: ${option.label}`);
  };
  return (
    <>
      <div className="">
        <div>
          <h1 className="text-2xl mb-4 font-bold">Select a Country</h1>
          <SearchableSelect options={options} onSelect={handleSelect} />
        </div>
      </div>
    </>
  );
}
