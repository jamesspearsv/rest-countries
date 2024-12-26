import { Country } from "../types/country";
import styles from "../pages/Home.module.css"; // todo : move these styles
import CountryCard from "./CountryCard/CountryCard.tsx";
import { useEffect, useState } from "react";

type CountriesGridProps = {
  searchTerm: string;
  selectedRegion: string;
};

export default function CountriesGrid({
  searchTerm,
  selectedRegion,
}: CountriesGridProps) {
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [error, setError] = useState(false);

  // todo add ability to search and filter api data
  useEffect(() => {
    // fetch data from API
    (async () => {
      const fields =
        "?fields=name,population,region,subregion,capital,cca3,borders,flags,tld,currencies,languages";
      try {
        const service = {
          all: "https://restcountries.com/v3.1/all",
          search: `https://restcountries.com/v3.1/name/${searchTerm}`,
          region: `https://restcountries.com/v3.1/region/${selectedRegion}`,
        };

        let url: string;
        if (searchTerm) {
          url = service.search;
        } else if (selectedRegion) {
          url = service.region;
        } else {
          url = service.all;
        }

        const res = await fetch(url + fields);
        if (!res.ok) throw new Error("Something went wrong");

        const json = await res.json();
        setCountries(json);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    })();

    // clean up effect
    return () => {
      setCountries(null);
      setError(false);
    };
  }, [searchTerm, selectedRegion]);

  if (error) {
    return (
      <div style={{ width: "100%", padding: "5rem", textAlign: "center" }}>
        <p>Error!</p>
      </div>
    );
  }

  if (!countries) {
    return (
      <div style={{ width: "100%", padding: "5rem", textAlign: "center" }}>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <div className={styles.countryGrid}>
        {countries.map((country: Country, index: number) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
}
