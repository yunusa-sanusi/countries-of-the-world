import { Link, useParams } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

import { useCountriesContext } from '../contexts/CountriesContext';

const CountryDetail = () => {
  const { countriesData } = useCountriesContext();

  const { name } = useParams();

  const country = countriesData.find(
    (country) => country.name.toLowerCase() === name,
  );

  const currencies = country?.currencies?.map((currency) => currency.name);
  const languages = country?.languages.map((language) => language.name);

  return (
    <section className="h-auto md:h-screen pt-28 px-3 md:px-6 pb-6">
      <Link
        to="/"
        className="shadow shadow-[#cccbcb] dark:shadow-[#606060] bg-white dark:bg-dark-blue rounded-md px-2 py-1 font-light flex justify-center items-center w-20 text-14 mb-12"
      >
        <HiOutlineArrowNarrowLeft className="mr-1" /> Back
      </Link>

      <div className="md:flex md:items-center">
        <div className="w-full mb-14 md:mb-0 md:w-[45%] flex-1 h-auto md:mr-20">
          <img
            src={country?.flag}
            alt={country?.name}
            className="w-full h-full"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl mt-5 md:mt-0 md:mb-3 font-extrabold">
            {country?.name}
          </h2>
          <div className="pt-5 md:flex md:justify-between">
            <div className="mb-12 md:mb-0">
              <h4 className="text-14 my-3">
                <span className="font-extrabold">Native Name: </span>
                {country?.name}
              </h4>
              <h4 className="text-14 my-3">
                <span className="font-extrabold">Population: </span>
                {country?.population}
              </h4>
              <h4 className="text-14 my-3">
                <span className="font-extrabold">Region: </span>
                {country?.region}
              </h4>
              <h4 className="text-14 my-3">
                <span className="font-extrabold">Sub Region: </span>
                {country?.subregion}
              </h4>
              <h4 className="text-14 my-3">
                <span className="font-extrabold">Capital: </span>
                {country?.capital}
              </h4>
            </div>
            <div>
              <h4 className="text-14 my-3">
                <span className="font-extrabold">Top Level Domain: </span>
                {country?.topLevelDomain.join(', ')}
              </h4>
              <h4 className="text-14 my-3">
                <span className="font-extrabold">Currencies: </span>
                {currencies?.join(', ')}
              </h4>
              <h4 className="text-14 my-3">
                <span className="font-extrabold">Languages: </span>
                {languages?.join(', ')}
              </h4>
            </div>
          </div>
          <div className="mt-14 flex flex-col md:flex-row flex-wrap">
            <h4 className="text-14 my-3">
              <span className="font-extrabold mb-3 md:mb-0">
                Border Countries:{' '}
              </span>
            </h4>
            <div className="ml-0 md:ml-4">
              {country?.borders?.map((border) => {
                return (
                  <span
                    key={border}
                    className="px-6 py-2 mr-2 rounded-md bg-white dark:bg-dark-blue shadow shadow-[#cccbcb] dark:shadow-[#606060]"
                  >
                    {border}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetail;
