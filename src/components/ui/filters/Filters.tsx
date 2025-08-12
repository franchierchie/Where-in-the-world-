import { IoSearch } from 'react-icons/io5';

export const Filters = () => {
  return (
    <div className="pb-20 flex items-center justify-between">
      <label
        htmlFor="search-bar"
        className="flex items-center gap-5 bg-slate-700/50 shadow-xs lg:w-min lg:min-w-xl px-10 py-5 rounded-md"
      >
        <IoSearch size={ 25 } />
        <input
          id="search-bar"
          type="search"
          placeholder="Search for a country..."
          className="text-xl border-none outline-none w-full"
        />
      </label>

      <select
        name="region"
        id="region"
        className="bg-slate-700/50 px-5 py-6 rounded-md lg:min-w-3xs text-xl region__dropdown"
      >
        <option className="bg-slate-700" value="all">Filter by Region</option>
        <option className="bg-slate-700" value="africa">Africa</option>
        <option className="bg-slate-700" value="america">America</option>
        <option className="bg-slate-700" value="asia">Asia</option>
        <option className="bg-slate-700" value="europe">Europe</option>
        <option className="bg-slate-700" value="oceania">Oeania</option>
      </select>
    </div>
  )
}
