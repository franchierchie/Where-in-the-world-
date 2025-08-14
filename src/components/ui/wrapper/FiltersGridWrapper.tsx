'use client';

import { useState } from "react";

import { CountriesGrid, Filters } from "@/components"
import { Country } from "@/interfaces";

interface Props {
  countries: Country[];
}

export const FiltersGridWrapper = ({ countries }: Props) => {
  const [filterValue, setFilterValue] = useState('');

  return (
    <>
      <Filters onFilterChange={ setFilterValue } />
      <CountriesGrid countries={ countries } filter={ filterValue } />
    </>
  )
}
