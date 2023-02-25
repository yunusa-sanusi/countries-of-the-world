import { ChangeEvent } from 'react';
import { FiSearch } from 'react-icons/fi';

import { useCountriesContext } from '../contexts/CountriesContext';

const Search = () => {
  const { filterCountriesWithSearchInput } = useCountriesContext();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    filterCountriesWithSearchInput(searchTerm);
  };

  return (
    <div className="bg-white dark:bg-dark-blue text-dark-gray dark:text-white w-full md:w-96 h-full flex justify-center rounded-md shadow shadow-[#cccbcb] dark:shadow-[#606060]">
      <FiSearch className="m-auto mx-4 text-16" />
      <input
        type="search"
        className="w-full h-full text-14 py-3 pr-2 outline-none rounded-md dark:bg-dark-blue"
        placeholder="Search for a country..."
        onChange={handleOnChange}
      />
    </div>
  );
};
export default Search;
