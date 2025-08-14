'use server';

export const getCountries = async() => {
  try {
    const data = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3');
    const countries = await data.json();
  
    return countries;
    
  } catch (error) {
    console.log( error );
    throw new Error('There was an error fetching the countries.');
  }
}
