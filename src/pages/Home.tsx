import * as data from "../data.json";
import CountryCard from "../components/CountryCard/CountryCard.tsx";

//https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,cca3,borders,flags,tld,currencies,languages

// @ts-expect-error -> importing development data
const countries = data.default;

export default function HomePage() {
  console.log(countries[200]);
  return (
    <>
      <h1>Home page</h1>
      <CountryCard country={countries[200]} />
    </>
  );
}
