import { getCountries } from '@/actions';
import { CountriesGrid, Filters } from '@/components';

export default async function Home() {
  const countries = await getCountries();

  return (
    <>
      <Filters />
      <CountriesGrid countries={ countries } />
    </>
  );
}
