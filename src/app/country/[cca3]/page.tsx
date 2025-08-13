
import Image from "next/image";
import Link from "next/link";

import { IoArrowBack } from "react-icons/io5";

import { getBorderCountries, getCountryByCode } from "@/actions";

interface Props {
  params: Promise<{ cca3: string }>;
}

/*
async function generateMetadata(
  { params }: Props,
  // parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug

  // fetch data
  const product = await getProductBySlug( slug );

  return {
    title: product?.title ?? 'Product Not Found',
    description: product?.description ?? '',
    openGraph: {
      title: product?.title ?? 'Product Not Found',
      description: product?.description ?? '',
      images: [`/products/${ product?.images[1] }`],
    }
  }
}
*/


export default async function CountryPage({ params }: Props) {
  const { cca3 } = await params;
  const country = await getCountryByCode( cca3 );
  const borderCountries = await getBorderCountries( country.borders );

  const countryFlag = ( !country.flags.svg ) ? country.flags.png : country.flags.svg;
  const countryCapital = ( country.capital.length > 1 )
    ? country.capital.join(', ')
    : country.capital[0]

  const countryLanguagesArray = Object.values( country.languages as Record<string, string> );
  const countryLanguages = ( countryLanguagesArray.length > 1 )
    ? countryLanguagesArray.join(', ')
    : countryLanguagesArray[0]

  const countryCurrenciesArray = Object.values( country.currencies as Record<string, { name: string }>).map(c => c.name);
  const countryCurrencies = ( countryCurrenciesArray.length > 1 )
  ? countryCurrenciesArray.join(', ')
  : countryCurrenciesArray[0]

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
          <div className="w-full relative">
            <Image
              src={ countryFlag }
              alt={ country.flags.alt }
              className="object-contain"
              width={ 640 }
              height={ 480 }
              priority
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-9">
            <h1 className="text-3xl md:text-4xl font-bold">{ country.name.common }</h1>
            
            <ul className="space-y-2">
              <li className="text-lg md:text-xl flex flex-wrap gap-1.5">
                <p className="font-bold">Official Name:</p>
                <p className="text-current/50">{ country.name.official }</p>
              </li>
              <li className="text-lg md:text-xl flex flex-wrap gap-1.5">
                <p className="font-bold">Population:</p>
                <p className="text-current/50">{ ( country.population ).toLocaleString() }</p>
              </li>
              <li className="text-lg md:text-xl flex flex-wrap gap-1.5">
                <p className="font-bold">Region:</p>
                <p className="text-current/50">{ country.region }</p>
              </li>
              <li className="text-lg md:text-xl flex flex-wrap gap-1.5">
                <p className="font-bold">Sub Region:</p>
                <p className="text-current/50">{ country.subregion }</p>
              </li>
              <li className="text-lg md:text-xl flex flex-wrap gap-1.5">
                <p className="font-bold">Capital:</p>
                <p className="text-current/50">{ countryCapital }</p>
              </li>
              <li className="text-lg md:text-xl flex flex-wrap gap-1.5">
                <p className="font-bold">Top Level Domain:</p>
                <p className="text-current/50">{ country.tld }</p>
              </li>
              <li className="text-lg md:text-xl flex flex-wrap gap-1.5">
                <p className="font-bold">Currencies:</p>
                <p className="text-current/50">{ countryCurrencies }</p>
              </li>
              <li className="text-lg md:text-xl flex flex-wrap gap-1.5">
                <p className="font-bold">Languages:</p>
                <p className="text-current/50">{ countryLanguages }</p>
              </li>
            </ul>

            {/* Border Countries */}
            <div className="flex flex-wrap items-center gap-3 text-lg md:text-xl">
              <p className="font-bold w-max">Border Countries:</p>

                {
                  borderCountries.map((border) => (
                    <Link
                      key={ border?.cca3 }
                      href={`/country/${ border?.cca3 }`}
                      className="bg-slate-700/50 px-6 py-2 shadow-sm rounded text-current/50 hover:text-current"
                    >
                        { border?.name }
                    </Link>
                  ))
                }
            </div>
          </div>
        </div>
    </>
  );
}