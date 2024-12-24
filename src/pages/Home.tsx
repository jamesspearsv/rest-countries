import * as data from "../data.json";
import CountryCard from "../components/CountryCard/CountryCard.tsx";
import { Country } from "../types/country";

//https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,cca3,borders,flags,tld,currencies,languages

// @ts-expect-error -> importing development data
const countries = data.default;

export default function HomePage() {
  console.log(countries[200]);
  return (
    <div style={{ margin: "2rem 6rem" }}>
      <div
        style={{
          display: "grid",
          gap: "5rem",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {countries.map((country: Country, index: number) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
}
