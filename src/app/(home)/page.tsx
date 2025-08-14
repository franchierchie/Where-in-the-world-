import { getCountries } from '@/actions';
import { FiltersGridWrapper } from '@/components';

export default async function Home() {
  const countries = await getCountries();

  return (
    <>
      <FiltersGridWrapper countries={ countries } />
    </>
  );
}
