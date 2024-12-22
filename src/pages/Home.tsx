import * as data from "../data.json";
import CountryCard from "../components/CountryCard/CountryCard.tsx";
import { Country } from "../types/country";

//https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,cca3,borders,flags,tld,currencies,languages

// @ts-expect-error -> importing development data
const countries = data.default;

export default function HomePage() {
  console.log(countries[200]);
  return (
    <>
      <h1>Home page</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifySelf: "center",
          margin: "auto",
        }}
      >
        {countries.map((country: Country, index: number) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </>
  );
}
