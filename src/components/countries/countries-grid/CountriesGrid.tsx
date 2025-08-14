"use client";

import { CountriesGridItem } from "@/components";
import { Country } from "../../../interfaces";
import { useEffect, useState } from "react";


interface Props {
  countries: Country[];
  filter: string;
}


const regions = [
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
];

export const CountriesGrid = ({ countries, filter }: Props) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    if ( filter !== '' ) {
      let filteredCountriesArray;
      if ( filter === 'all' ) {
        // Show all the countries
        filteredCountriesArray = countries;

      } else if ( regions.includes( filter ) ) {
        // Show only the countries of this region
        filteredCountriesArray = countries.filter(country => country.region === filter);

      } else {
        // Searchbar
        filteredCountriesArray = countries.filter(country =>
          country.name.common.toLocaleLowerCase().includes( filter )
        );
      }

      setFilteredCountries(filteredCountriesArray);
    }

    if ( filter === '' ) {
      setFilteredCountries(countries);
    }
    
  }, [filter, countries]);

  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-10">
      {
        filteredCountries.map(country => (
          <CountriesGridItem key={ country.cca3 } country={ country }  />
        ))
      }
    </div>
  )
}
