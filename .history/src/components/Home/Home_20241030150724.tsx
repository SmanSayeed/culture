"use client";
import React from "react";
import SearchableSelect from "../Atoms/SearchableSelect";
import { countries } from "@/utils/countries";

type Props = {};

export interface Option {
    label: string;
    value: string;
  }

export default function Home({}: Props) {
    const options: Option[] = countries.map((country) => ({
        label: country.name,
        value: country.code,
      }));
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
