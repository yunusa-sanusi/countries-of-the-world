import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from 'react';

import { CountryType } from '../models/Country';

import data from '../data.json';

type CountriesContextType = {
  countriesData: CountryType[];
  countries: CountryType[];
  showRegionFilter: boolean;
  filterCountriesByRegion: (searchTerm: string) => void;
  filterCountriesWithSearchInput: (searchTerm: string) => void;
  toggleShowRegionFilter: () => void;
};

const initialStateType = {
  countries: [],
  showRegionFilter: false,
};

type CountriesProviderProp = {
  children: ReactNode;
};

const CountriesContext = createContext({} as CountriesContextType);

export const CountriesProvider = ({ children }: CountriesProviderProp) => {
  const [countriesData, setCountriesData] = useState<CountryType[]>(data);
  const [countries, setCountries] = useState<CountryType[]>(
    initialStateType.countries,
  );
  const [showRegionFilter, setShowRegionFilter] = useState<boolean>(
    initialStateType.showRegionFilter,
  );

  const filterCountriesByRegion = (searchTerm: string) => {
    if (searchTerm !== 'All') {
      const filteredCountries = countriesData.filter(
        (country) => country.region === searchTerm,
      );
      setCountries(filteredCountries);
    } else {
      setCountries(countriesData);
    }
  };

  const toggleShowRegionFilter = () => setShowRegionFilter((prev) => !prev);

  const filterCountriesWithSearchInput = (searchTerm: string) => {
    const filteredCountries = countriesData.filter((country) =>
      country.name.toLowerCase().startsWith(searchTerm.toLowerCase()),
    );
    setCountries(filteredCountries);
  };

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countriesData,
        countries,
        showRegionFilter,
        filterCountriesByRegion,
        filterCountriesWithSearchInput,
        toggleShowRegionFilter,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountriesContext = () => useContext(CountriesContext);
