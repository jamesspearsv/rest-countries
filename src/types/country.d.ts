export type Country = {
  borders: string[];
  capital: string[];
  cca3: string;
  currencies: { [key: string]: { name: string; symbol: string } };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  languages: { [key: string]: string };
  name: {
    common: string;
    official: string;
    nativeName: { [key: string]: { common: string; official: string } };
  };
  population: number;
  region: string;
  subregion: string;
  tld: string[];
};
