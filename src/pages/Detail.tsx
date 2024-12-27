import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Country } from "../types/country";

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

        const json = await res.json();
        setCountry(json);
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
    <div>
      <button>Back</button>
      <div>
        <div>flag</div>
        <div>
          <div>country name</div>
          <div>details 1</div>
          <div>details 2</div>
          <div>bordering countries</div>
        </div>
      </div>
    </div>
  );
}
