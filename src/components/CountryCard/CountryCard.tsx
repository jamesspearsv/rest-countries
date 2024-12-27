import CountryFlag from "./CountryFlag.tsx";
import CountryInfo from "./CountryInfo.tsx";
import { Country } from "../../types/country";
import styles from "./CountryCard.module.css";
import { Link } from "react-router";

type CountryCardProps = {
  country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <Link
      to={`/details/${country.name.common}`}
      className={styles.cardContainer}
    >
      <CountryFlag imageSrc={country.flags.svg} />
      <CountryInfo country={country} />
    </Link>
  );
}
