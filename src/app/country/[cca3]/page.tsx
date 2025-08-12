import Image from "next/image";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function CountryPage() {
  return (
    <>
        <Link
          href="/"
          className="flex items-center gap-2 bg-slate-700/50 shadow-sm pl-6 pr-8 py-3 rounded-md w-fit"
        >
          <IoArrowBack size={ 20 } />
          <p>Back</p>
        </Link>

        <div className="mt-10 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Flag */}
          <div className="w-full relative outline-blue-500">
            <Image
              src="https://flagcdn.com/ch.svg"
              alt="The flag of Switzerland is square shaped. It features a white Swiss cross centered on a red field."
              className="object-contain"
              width={ 640 }
              height={ 480 }
              priority
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-9 outline-violet-500">
            <h1 className="text-3xl md:text-4xl font-bold">Switzerland</h1>
            
            <ul className="space-y-2">
              <li className="text-lg md:text-xl flex flex-wrap gap-1.5">
                <p className="font-bold">Native Name:</p>
                <p className="text-current/50">Suisse, Schweiz, Svizzera, Svizra</p>
              </li>
              <li className="text-lg md:text-xl flex flex-wrap gap-1.5">
                <p className="font-bold">Population:</p>
                <p className="text-current/50">{ (8654622).toLocaleString() }</p>
              </li>
              <li className="text-lg md:text-xl flex flex-wrap gap-1.5">
                <p className="font-bold">Region:</p>
                <p className="text-current/50">Europe</p>
              </li>
              <li className="text-lg md:text-xl flex flex-wrap gap-1.5">
                <p className="font-bold">Sub Region:</p>
                <p className="text-current/50">Western Europe</p>
              </li>
              <li className="text-lg md:text-xl flex flex-wrap gap-1.5">
                <p className="font-bold">Capital:</p>
                <p className="text-current/50">Bern</p>
              </li>
              <li className="text-lg md:text-xl flex flex-wrap gap-1.5">
                <p className="font-bold">Top Level Domain:</p>
                <p className="text-current/50">.ch</p>
              </li>
              <li className="text-lg md:text-xl flex flex-wrap gap-1.5">
                <p className="font-bold">Currencies:</p>
                <p className="text-current/50">Swiss franc</p>
              </li>
              <li className="text-lg md:text-xl flex flex-wrap gap-1.5">
                <p className="font-bold">Languages:</p>
                <p className="text-current/50">French, Swiss German, Italian, Romansh</p>
              </li>
            </ul>

            {/* Border Countries */}
            <div className="flex flex-wrap items-center gap-3 text-lg md:text-xl">
              <p className="font-bold w-max">Border Countries:</p>

                <Link
                  href={`/country/ARG`}
                  className="bg-slate-700/50 px-6 py-2 shadow-sm rounded text-current/50 hover:text-current"
                >
                    Austria
                </Link>
                <Link
                  href={`/country/ARG`}
                  className="bg-slate-700/50 px-6 py-2 shadow-sm rounded text-current/50 hover:text-current"
                >
                    France
                </Link>
                <Link
                  href={`/country/ARG`}
                  className="bg-slate-700/50 px-6 py-2 shadow-sm rounded text-current/50 hover:text-current"
                >
                    Italy
                </Link>
                <Link
                  href={`/country/ARG`}
                  className="bg-slate-700/50 px-6 py-2 shadow-sm rounded text-current/50 hover:text-current"
                >
                    Liechtenstein
                </Link>
                <Link
                  href={`/country/ARG`}
                  className="bg-slate-700/50 px-6 py-2 shadow-sm rounded text-current/50 hover:text-current"
                >
                    Germany
                </Link>
            </div>
          </div>
        </div>
    </>
  );
}