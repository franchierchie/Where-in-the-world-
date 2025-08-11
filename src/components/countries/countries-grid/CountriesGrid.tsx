import { CountriesGridItem } from '@/components';

export const CountriesGrid = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-10">
      <CountriesGridItem />
      <CountriesGridItem />
      <CountriesGridItem />
      <CountriesGridItem />
      <CountriesGridItem />
      <CountriesGridItem />
    </div>
  )
}
