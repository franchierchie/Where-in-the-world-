import Link from 'next/link';
import Image from 'next/image';

import { Country } from '@/interfaces';

interface Props {
  country: Country;
}

export const CountriesGridItem = ({ country }: Props) => {
  const countryFlag = ( !country.flags.svg ) ? country.flags.png : country.flags.svg;

  return (
    <Link
      href={`/country/${ country.cca3 }`}
      className="w-full lg:w-90 rounded-lg overflow-hidden bg-slate-700/50 shadow-xs"
    >
      <div className="w-full h-auto aspect-[3/2] relative">
        <Image
          src={ countryFlag }
          alt={ country.flags.alt }
          className="object-cover rounded"
          fill
          priority
        />
      </div>

      <div className="p-10 pb-15">
        <h2 className="font-bold text-2xl mb-5">{ country.name.common }</h2>
        
        <div>
          <p className="text-lg">
            <span className="font-bold pr-2">Population:</span>
            <span className="text-gray-400">{ ( country.population ).toLocaleString() }</span>
          </p>
          <p className="text-lg">
            <span className="font-bold pr-2">Region:</span>
            <span className="text-gray-400">{ country.region }</span>
          </p>
          <p className="text-lg">
            <span className="font-bold pr-2">Capital:</span>
            <span className="text-gray-400">{ country.capital }</span>
          </p>
        </div>
      </div>
    </Link>
  )
}
