'use server';

import { ParamValue } from "next/dist/server/request/params";

export const getCountryByCode = async( code: ParamValue ) => {
  try {
    const data = await fetch(`https://restcountries.com/v3.1/alpha/${ code }`);
    const country = await data.json();
  
    return country[0];
    
  } catch (error) {
    console.log( error );
    throw new Error('There was an error fetching the countries by code.');
  }
}
