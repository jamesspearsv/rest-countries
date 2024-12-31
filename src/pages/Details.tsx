import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import { Country } from "../types/country";
import CountryFlag from "../components/CountryCard/CountryFlag.tsx";
import styles from "./Details.module.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type borderCountryType = {
  name: {
    common: string;
    official: string;
  };
};

export default function DetailPage() {
  const { countryName } = useParams();
  const [country, setCountry] = useState<Country | null>(null);
  const [error, setError] = useState(false);
  const [borderingCountries, setBorderingCountries] = useState<
    borderCountryType[] | null
  >(null);

  useEffect(() => {
    (async () => {
      try {
        const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true&fields=name,population,region,subregion,capital,cca3,borders,flags,tld,currencies,languages`;

        const res = await fetch(url);

        if (!res.ok) throw new Error("Could not fetch country");

        const json: Country[] = await res.json();
        console.log(json[0]);
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
  }, [countryName]);

  useEffect(() => {
    (async () => {
      try {
        if (!country) return;

        const requests: Promise<Response>[] = [];

        // init requests array
        for (const code of country.borders) {
          const req = fetch(
            `https://restcountries.com/v3.1/alpha/${code}?fields=name`,
          );
          requests.push(req);
        }

        // resolve and parse requests
        const responses = await Promise.all(requests);
        const json: borderCountryType[] = await Promise.all(
          responses.map((res) => res.json()),
        );

        setBorderingCountries(json);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    })();

    // clean up
    return () => {
      setBorderingCountries(null);
      setError(false);
    };
  }, [country]);

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
                    {country.currencies[key].name} (
                    {country.currencies[key].symbol})
                    {index != Object.keys(country.currencies).length - 1 &&
                      ", "}
                  </span>
                ))}
              </li>
              <li>
                <span>Languages:</span>
                {Object.keys(country.languages).map((key, index) => (
                  <span key={index}>
                    {country.languages[key]}
                    {index != Object.keys(country.languages).length - 1 && ", "}
                  </span>
                ))}
              </li>
            </ul>
          </div>
          {borderingCountries && borderingCountries?.length > 0 && (
            <div className={styles.borderLinksContainer}>
              <div>Bordering Countries:</div>
              <div>
                {borderingCountries.map((borderCountry, index) => (
                  <Link
                    to={`/details/${borderCountry.name.common}`}
                    key={index}
                  >
                    <button className={styles.borderLink} key={index}>
                      {borderCountry.name.common}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
