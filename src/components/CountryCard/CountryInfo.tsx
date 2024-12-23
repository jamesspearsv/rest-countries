import { Country } from "../../types/country";
import styles from "./CountryCard.module.css";

type CountryInfoProps = {
  country: Country;
};

export default function CountryInfo({ country }: CountryInfoProps) {
  return (
    <div className={styles.countryInfo}>
      <div className={styles.countryName}>{country.name.common}</div>
      <p>
        Population: <span>{country.population}</span>
      </p>
      <p>
        Region: <span>{country.region}</span>
      </p>
      {country.capital.length > 0 && (
        <p>
          Capital: <span>{country.capital[0]}</span>
        </p>
      )}
    </div>
  );
}
