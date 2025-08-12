import Link from 'next/link';
import Image from 'next/image';

export const CountriesGridItem = () => {
  return (
    <Link
      href="/country/CHE"
      className="w-full lg:w-90 rounded-lg overflow-hidden bg-slate-700/50 shadow-xs"
    >
      <div className="w-full aspect-[3/2] relative">
        <Image
          src="https://flagcdn.com/ch.svg"
          alt="The flag of Switzerland is square shaped. It features a white Swiss cross centered on a red field."
          className="object-cover rounded"
          fill
          priority
        />
      </div>

      <div className="p-10 pb-15">
        <h2 className="font-bold text-2xl mb-5">Country Name</h2>
        
        <div>
          <p className="text-lg">
            <span className="font-bold pr-2">Population:</span>
            <span className="text-gray-400">{ (8654622).toLocaleString() }</span>
          </p>
          <p className="text-lg">
            <span className="font-bold pr-2">Region:</span>
            <span className="text-gray-400">Europe</span>
          </p>
          <p className="text-lg">
            <span className="font-bold pr-2">Capital:</span>
            <span className="text-gray-400">Bern</span>
          </p>
        </div>
      </div>
    </Link>
  )
}
