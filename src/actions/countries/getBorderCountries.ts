'use server';

import { Country } from "@/interfaces";

export const getBorderCountries = async( borders: [] ) => {
  const data = await fetch('https://restcountries.com/v3.1/all?fields=name,cca3');
  const countries = await data.json();

  const borderCountries = borders.map((code: string) => {
    const match = countries.find((country: Country) => country.cca3 === code);
    return match ? { name: match.name.common, cca3: match.cca3 } : null;
  }).filter(Boolean);

  return borderCountries;
}
