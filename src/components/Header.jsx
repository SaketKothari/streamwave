import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import ytLogo from '../assets/yt-logo.png';
import ytLogoMobile from '../assets/yt-logo-mobile.png';

import { CgClose } from 'react-icons/cg';
import { FiBell } from 'react-icons/fi';
import { IoIosSearch } from 'react-icons/io';
import { RiVideoAddLine } from 'react-icons/ri';
import { SlMenu } from 'react-icons/sl';

import { DataContext } from '../context/ApiContext';
import Loader from '../shared/Loader';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { loading, mobileMenu, setMobileMenu } = useContext(DataContext);
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === 'Enter' || event === 'searchButton') &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const searchQueryHandler2 = () => {
    if (searchQuery?.length > 0) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  // extracting the name of the current page or route from the URL path
  // Ex if the URL path is "/products/shoes," pageName would be "products."
  const { pathname } = useLocation();
  const pageName = pathname?.split('/')?.filter(Boolean)?.[0];

  return (
    <div className="flex flex-row h-14 px-4 md:px-5 justify-between items-center sticky top-0 z-20 bg-white dark:bg-black">
      {loading && <Loader />}

      <div className="flex h-5 items-center">
        {pageName !== 'video' && (
          <div
            onClick={mobileMenuToggle}
            className="flex h-10 w-10 justify-center items-center rounded-full  md:hidden md:mr-6 cursor-pointer hover:bg-[#303030]/[0.6]"
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}

        <Link to="/" className="flex h-5 items-center">
          <img
            src={ytLogo}
            alt="Streamwave"
            className="h-full hidden dark:md:block"
          />

          <img
            src={ytLogoMobile}
            alt="Streamwave"
            className="h-full md:hidden"
          />
        </Link>
      </div>

      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#404040] rounded-l-3xl">
          <input
            type="text"
            value={searchQuery}
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            className="w-44 px-5 bg-transparent outline-none text-white md:pl-0 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
          />
        </div>

        <button
          onClick={searchQueryHandler2}
          className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#404040] rounded-r-3xl bg-white/[0.15]"
        >
          <IoIosSearch className="text-white text-xl" />
        </button>
      </div>

      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex justify-center items-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>

          <div className="flex justify-center items-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
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
