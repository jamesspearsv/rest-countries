import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import { Country } from "../types/country";
import CountryFlag from "../components/CountryCard/CountryFlag.tsx";
import styles from "./Details.module.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DetailPage() {
  const { countryName } = useParams();
  const [country, setCountry] = useState<Country | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true&fields=name,population,region,subregion,capital,cca3,borders,flags,tld,currencies,languages`;

        const res = await fetch(url);

        if (!res.ok) throw new Error("Could not fetch country");

        const json: Country[] = await res.json();
        console.log(json);
        setCountry(json[0]);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    })();

    return () => {
      setError(false);
      setCountry(null);
    };
  }, []);

  if (error) return <p>Error fetching country</p>;
  if (!country) return <p>Loading...</p>;

  return (
    <div className={styles.pageContainer}>
      <Link to={"/"}>
        <button className={styles.backButton}>
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          Back
        </button>
      </Link>
      <div className={styles.contentContainer}>
        <div className={styles.flagContainer}>
          <CountryFlag imageSrc={country.flags.svg} />
        </div>
        <div>
          <div className={styles.name}>{country.name.common}</div>
          <div className={styles.detailsContainer}>
            <ul className={styles.detailsList}>
              <li>
                <span>Native Name:</span>
                {Object.keys(country.name.nativeName).map((key, index) => (
                  <span key={index}>
                    {country.name.nativeName[key].common}
                    {index != Object.keys(country.name.nativeName).length - 1 &&
                      ", "}
                  </span>
                ))}
              </li>
              <li>
                <span>Population:</span>
                {country.population.toLocaleString()}
              </li>
              <li>
                <span>Region:</span>
                {country.region}
              </li>
              <li>
                <span>Subregion:</span>
                {country.subregion}
              </li>
              <li>
                <span>Capital:</span>
                {country.capital[0]}
              </li>
            </ul>
            <ul className={styles.detailsList}>
              <li>
                <span>Top Level Domain:</span>
                {country.tld}
              </li>
              <li>
                <span>Currencies:</span>
                {Object.keys(country.currencies).map((key, index) => (
                  <span key={index}>
                    {country.currencies[key].name}
                    {index != Object.keys(country.currencies).length - 1 &&
                      ", "}
                  </span>
                ))}
              </li>
              <li>
                <span>Languages:</span>
                {Object.keys(country.languages).map((key, index) => (
                  <span>
                    {country.languages[key]}
                    {index != Object.keys(country.languages).length - 1 && ", "}
                  </span>
                ))}
              </li>
            </ul>
          </div>
          <div> todo: bordering countries</div>
        </div>
      </div>
    </div>
  );
}
