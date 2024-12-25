import CountryCard from "../components/CountryCard/CountryCard.tsx";
import { Country } from "../types/country";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.css";

export default function HomePage() {
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // todo add ability to search and filter api data
  useEffect(() => {
    // fetch data from API
    (async () => {
      const fields =
        "?fields=name,population,region,subregion,capital,cca3,borders,flags,tld,currencies,languages";
      try {
        const request = {
          all: "https://restcountries.com/v3.1/all",
          search: `https://restcountries.com/v3.1/name/${searchTerm}`,
        };

        const res = await fetch(request.all + fields);
        if (!res.ok) throw new Error("Something went wrong");

        const json = await res.json();
        console.log(json);
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
  }, []);

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
    <div className={styles.container}>
      <div className={styles.actionBar}>
        <div className={styles.searchBox}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
          <input type="text" placeholder="Search for a country..." />
        </div>
        <div></div>
      </div>
      <div>
        <div className={styles.countryGrid}>
          {countries.map((country: Country, index: number) => (
            <CountryCard key={index} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
}
