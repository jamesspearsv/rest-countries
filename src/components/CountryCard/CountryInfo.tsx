import { Country } from "../../types/country";

type CountryInfoProps = {
  country: Country;
};

export default function CountryInfo({ country }: CountryInfoProps) {
  return (
    <div>
      <div>{country.name.common}</div>
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
