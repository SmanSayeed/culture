'use server'
import { getCountries } from "@/actions/countryController";
import { Response } from "@/actions/response";
import { Country } from "@/lib/countries";
import CountryInputButton from "../components/CountryInputButton";

export default async function Home() {
  const countries: Response<Country[]> = await getCountries();
 
  return (
    <>
        <CountryInputButton />
         {
        countries?.data.length>0 && countries?.data.map((country) => (
          <div key={country.name}>{country.name}</div>
        ))
      }
    </>
  );
}
