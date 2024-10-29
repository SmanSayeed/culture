import { Country, countries } from "@/lib/countries";

interface Props {
  selectedCountry: string;
  onSelectCountry: (countryCode: string) => void;
}

const CountrySelect: React.FC<Props> = ({ selectedCountry, onSelectCountry }) => (
  <select
    className="p-2 border rounded"
    value={selectedCountry}
    onChange={(e) => onSelectCountry(e.target.value)}
  >
    <option value="">Select Country</option>
    {countries.map((country) => (
      <option key={country.code} value={country.code}>
        {country.name}
      </option>
    ))}
  </select>
);

export default CountrySelect;
