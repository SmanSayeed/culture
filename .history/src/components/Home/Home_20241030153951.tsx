// components/Home.tsx

'use client';
import React, { useState } from 'react';
import SearchableSelect from '../Atoms/SearchableSelect';
import Table from '../Atoms/Table';
import { countries } from '@/utils/countries';
import { cultureData, cultureDataType, cultureType } from '@/utils/culture';

type Props = {};

export interface Option {
  label: string;
  value: string;
}

const Home: React.FC<Props> = () => {
  const [culturesInfo, setCulturesInfo] = useState<cultureType[]>([]);
  const [countryName,setCountryName] = useState<string>('')

  const options: Option[] = countries.map((country) => ({
    label: country.name,
    value: country.code,
  }));

  const handleSelect = (option: Option) => {
    const selectedCulture = cultureData.find((culture) => culture.code === option.value);
    if (selectedCulture) {
      setCulturesInfo(selectedCulture.culture);
      setCountryName(option.label)
    }
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl mb-4 font-bold">Select a Country</h1>
        <SearchableSelect options={options} onSelect={handleSelect} />
        <div className="mt-6">
          <Table data={culturesInfo} country={} />
        </div>
      </div>
    </>
  );
};

export default Home;
