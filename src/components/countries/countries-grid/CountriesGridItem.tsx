import Link from 'next/link';
import Image from 'next/image';

export const CountriesGridItem = () => {
  return (
    <Link
      href="/"
      className="w-full lg:w-90 rounded-lg overflow-hidden bg-slate-700/50 shadow-xs"
    >
      <div className="w-full aspect-[3/2] relative">
        <Image
          src="https://flagcdn.com/ch.svg"
          alt="Switzerland national flag"
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
            <span className="text-gray-400">{ (99999999).toLocaleString() }</span>
          </p>
          <p className="text-lg">
            <span className="font-bold pr-2">Region:</span>
            <span className="text-gray-400">Continent</span>
          </p>
          <p className="text-lg">
            <span className="font-bold pr-2">Capital:</span>
            <span className="text-gray-400">Capital city</span>
          </p>
        </div>
      </div>
    </Link>
  )
}
