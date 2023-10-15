import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { DataContext } from '../../context/ApiContext';
import Loader from '../../shared/Loader';
import useOnline from '../../utils/useOnline';

import Logo from './Logo';
import MobileMenuButton from './MobileMenuButton';
import OnlineStatus from './OnlineStatus';
import SearchInput from './SearchInput';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {
  const isOnline = useOnline();
  const { loading, mobileMenu, setMobileMenu, theme, setTheme } =
    useContext(DataContext);

  // extracting the name of the current page or route from the URL path
  // Ex if the URL path is "/products/shoes," pageName would be "products."
  const { pathname } = useLocation();
  const pageName = pathname?.split('/')?.filter(Boolean)?.[0];

  return (
    <div className="flex flex-row h-14 px-4 md:px-5 justify-between items-center sticky top-0 z-20 bg-white dark:bg-black shadow-md">
      {loading && <Loader />}

      <div className="flex h-5 items-center">
        {pageName !== 'video' && (
          <MobileMenuButton
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
          />
        )}
        <Logo />
      </div>

      <div className="group flex items-center">
        <SearchInput />
      </div>

      <div className="flex items-center">
        <div className="hidden md:flex">
          <OnlineStatus isOnline={isOnline} />
          <ThemeSwitch theme={theme} setTheme={setTheme} />
        </div>

        <div className="flex h-8 w-8 mt-1 overflow-hidden rounded-full md:ml-4">
          <Link to={'https://github.com/SaketKothari'}>
            <img
              src="https://avatars.githubusercontent.com/u/81709725?v=4"
              alt="user-icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
