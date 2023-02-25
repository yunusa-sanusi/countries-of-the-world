import { MouseEvent } from 'react';
import { RxCaretDown } from 'react-icons/rx';

import { useCountriesContext } from '../contexts/CountriesContext';

const RegionFilter = () => {
  const {
    countriesData,
    showRegionFilter,
    filterCountriesByRegion,
    toggleShowRegionFilter,
  } = useCountriesContext();

  const getRegions = countriesData.map((country) => country.region);

  let regions = ['All', ...new Set(getRegions)];
  regions = regions.sort();

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    filterCountriesByRegion(e.currentTarget.value);
  };

  return (
    <div className="bg-white dark:bg-dark-blue text-dark-gray dark:text-white text-14 font-extrabold rounded-md w-56 h-auto shadow shadow-[#cccbcb] dark:shadow-[#606060] relative">
      <div className="w-full h-full flex justify-between items-center py-3 px-3">
        <p className="">Filter By Region</p>
        <RxCaretDown
          size={18}
          onClick={toggleShowRegionFilter}
          className="hover:cursor-pointer"
        />
      </div>
      {showRegionFilter && (
        <div className="scale-up-top bg-white dark:bg-dark-blue text-dark-gray dark:text-white rounded-md flex flex-col justify-start items-start py-3 px-3 pr-8 gap-y-2 shadow shadow-[#cccbcb] dark:shadow-[#606060] absolute top-14">
          {regions.map((region) => {
            return (
              <button key={region} value={region} onClick={handleOnClick}>
                {region}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default RegionFilter;
