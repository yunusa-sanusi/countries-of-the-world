import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BsMoon, BsMoonFill } from 'react-icons/bs';

import { useThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useThemeContext();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      <nav className="h-auto w-full bg-white dark:bg-very-dark-blue flex justify-between item-center text-very-dark-blue dark:text-white p-3 md:p-6 shadow shadow-[#cccbcb] dark:shadow-[#606060] fixed top-0 left-0 z-10">
        <div>
          <Link
            to="/"
            className="font-extrabold xs:text-sm sm:text-lg md:text-xl"
          >
            Where in the world
          </Link>
        </div>
        <button className="flex items-center" onClick={toggleTheme}>
          {theme === 'light' ? <BsMoon /> : <BsMoonFill className="text-14" />}
          <p className="ml-1 text-14">Dark Mode</p>
        </button>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
