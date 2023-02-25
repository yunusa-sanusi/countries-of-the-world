import { Link } from 'react-router-dom';

import { CountryType } from '../models/Country';

type CountryProps = {
  country: CountryType;
};

const Country = ({ country }: CountryProps) => {
  const { name, population, region, capital, flag } = country;

  return (
    <div className="bg-white dark:bg-dark-blue w-full h-auto shadow shadow-[#cccbcb] dark:shadow-[#606060] rounded-md">
      <Link to={`country/${name.toLowerCase()}`}>
        <div className="w-full md:h-[200px] rounded-t-md">
          <img
            src={flag}
            alt={name}
            className="h-full w-full object-fill rounded-t-md"
          />
        </div>
        <div className="px-4 pb-6">
          <h3 className="font-semibold py-3 text-sm">{name}</h3>
          <p className="text-sm">
            <span className="font-semibold">Population:</span> {population}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Region:</span> {region}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Capital:</span> {capital}
          </p>
        </div>
      </Link>
    </div>
  );
};
export default Country;
