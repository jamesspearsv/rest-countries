import CountryFlag from "./CountryFlag.tsx";
import CountryInfo from "./CountryInfo.tsx";
import { Country } from "../../types/country";

type CountryCardProps = {
  country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <div style={{ margin: "3rem" }}>
      <CountryFlag imageSrc={country.flags.svg} />
      <CountryInfo country={country} />
    </div>
  );
}
