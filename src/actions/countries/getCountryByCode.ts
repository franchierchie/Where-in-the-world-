'use server';

import { ParamValue } from "next/dist/server/request/params";

export const getCountryByCode = async( code: ParamValue ) => {
  const data = await fetch(`https://restcountries.com/v3.1/alpha/${ code }`);
  const country = await data.json();

  return country[0];
}
