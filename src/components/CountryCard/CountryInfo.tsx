import { Country } from "../../types/country";

type CountryInfoProps = {
  country: Country;
};

export default function CountryInfo({ country }: CountryInfoProps) {
  return (
    <div>
      <p>Info about {country.name.common}</p>
    </div>
  );
}
