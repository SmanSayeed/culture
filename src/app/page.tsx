import { getCountries } from "@/actions/countryController";

export default async function Home() {
  const countries = await getCountries();
  return (
    <div className="">
      {
        countries.map((country) => (
          <div key={country.name}>{country.name}</div>
        ))
      }
    </div>
  );
}
