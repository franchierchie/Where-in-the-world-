import { CountriesGridItem } from '@/components';
import { Country } from '../../../interfaces';

interface Props {
  countries: Country[];
}

export const CountriesGrid = ({ countries }: Props) => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-10">
      {
        countries.map(country => (
          <CountriesGridItem key={ country.cca3 } country={ country }  />
        ))
      }
    </div>
  )
}
