'use client';

import { useForm } from '@/hooks';
import { ChangeEvent, Dispatch, SetStateAction, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';

interface Props {
  onFilterChange: Dispatch<SetStateAction<string>>;
}

const regions = [
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
];

export const Filters = ({ onFilterChange }: Props) => {
  const { searchText, onInputChange } = useForm({ searchText: '' });
  
  const handleClick = ( region: ChangeEvent<HTMLSelectElement> ) => {
    const newRegion = region.target.value;
    onFilterChange( newRegion );
  }

  useEffect(() => {
    const trimmedInputValue = searchText.toLocaleLowerCase().trim();
    onFilterChange( trimmedInputValue );
    
  }, [searchText, onFilterChange]);

  return (
    <div className="pb-20 flex items-center justify-between">
      <form>
        <label
          htmlFor="search-bar"
          className="flex items-center gap-5 bg-slate-700/50 shadow-xs lg:w-min lg:min-w-xl px-10 py-5 rounded-md"
        >
          <IoSearch size={ 25 } />
          <input
            id="searchText"
            type="search"
            placeholder="Search for a country..."
            className="text-xl border-none outline-none w-full"
            name="searchText"
            value={ searchText }
            onChange={ onInputChange }
          />
        </label>
      </form>

      <select
        name="region"
        id="region"
        className="bg-slate-700/50 px-5 py-6 rounded-md lg:min-w-3xs text-xl region__dropdown"
        onChange={ handleClick }
      >
        <option className="bg-slate-700" value="all">Filter by Region</option>

        {
          regions.map(reg => (
            <option
              key={ reg }
              className="bg-slate-700"
              value={ reg }
            >
              { reg }
            </option>
          ))
        }
      </select>
    </div>
  )
}
