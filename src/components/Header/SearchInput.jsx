import { useEffect, useState } from 'react';
import { IoIosSearch, IoMdSearch } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { cacheResults } from '../../slices/searchSlice';
import { fetchDataFromApi } from '../../utils/api';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event?.key === 'Enter' && searchQuery.length > 0) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const searchQueryHandler2 = () => {
    if (searchQuery.length > 0) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const handleSuggestion = (event) => {
    setSearchQuery(event.target.innerText);
    setShowSuggestions(false);
    navigate(
      '/searchResult/${searchQuery}' + encodeURI(event.target.innerText)
    );
  };

  useEffect(() => {
    // Make an API call after every keypress
    // But if diff bw 2 API calls is < 200ms => Decline API calls
    const timer = setTimeout(() => {
      // if searchQuery is present in my cache, then directly setSuggestion i.e return searchCache of searchQuery
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        // if not then make an API Call
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetchDataFromApi(`auto-complete/?q=${searchQuery}`);
      setSuggestions(data?.results);
      // updating the cache
      dispatch(cacheResults({ [searchQuery]: data?.results }));
    } catch (error) {
      console.error('Error fetching search suggestions:', error);
    }
  };

  return (
    <>
      <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#404040] rounded-l-3xl">
        <input
          type="text"
          value={searchQuery}
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          className="w-44 px-5 bg-transparent outline-none text-black dark:text-white md:pl-0 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
        />
      </div>
      <button
        onClick={searchQueryHandler2}
        className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#404040] rounded-r-3xl bg-black/[0.1] dark:bg-white/[0.15]"
      >
        <IoIosSearch className="text-black/[0.9] dark:text-white text-xl" />
      </button>

      {showSuggestions && suggestions?.length > 0 && (
        <div className="fixed bg-white w-[18rem] md:w-[33rem] max-h-[350px] shadow-lg border rounded-2xl overflow-y-auto mt-[26rem] md:mt-[26rem]   ml-[-2rem] md:ml-[2rem] z-50 text-left">
          <ul className="py-3">
            {suggestions?.map((sugg) => (
              <li
                key={sugg}
                onMouseDown={(e) => handleSuggestion(e)}
                className="my-1 p-1 hover:bg-gray-100 cursor-pointer"
              >
                <IoMdSearch className="mr-5 h-4 ml-3 inline-block" />
                <span>{sugg}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchInput;
