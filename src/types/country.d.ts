export type Country = {
  borders: string[];
  capital: string[];
  cca3: string;
  currencies: object;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  languages: object;
  name: {
    common: string;
    official: string;
    nativeName: object;
  };
  population: number;
  region: string;
  subregion: string;
  tld: string[];
};
