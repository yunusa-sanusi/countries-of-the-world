import Country from './Country';
import { useCountriesContext } from '../contexts/CountriesContext';

const Countries = () => {
  const { countries } = useCountriesContext();

  return (
    <>
      {countries.map((country) => {
        return <Country key={country.name} country={country} />;
      })}
    </>
  );
};
export default Countries;
