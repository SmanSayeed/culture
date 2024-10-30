'use client'
import { useState } from "react";
import CountrySelect from "@/components/CountrySelect";
import CultureTable from "@/components/CultureTable";
import { fetchCultureData } from "@/lib/actions";

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cultureData, setCultureData] = useState([]);

  const handleCountrySelect = async (countryCode: string) => {
    setSelectedCountry(countryCode);
    const data = await fetchCultureData(countryCode);
    setCultureData(data);
  };

  return (
    <div>
      <CountrySelect selectedCountry={selectedCountry} onSelectCountry={handleCountrySelect} />
      <CultureTable cultureData={cultureData} onEdit={() => {}} onDelete={() => {}} />
    </div>
  );
};

export default Home;
