import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');
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

  return (
    <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#404040] rounded-l-3xl">
      <input
        type="text"
        value={searchQuery}
        placeholder="Search"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        className="w-44 px-5 bg-transparent outline-none text-black dark:text-white md:pl-0 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
      />
      <button
        onClick={searchQueryHandler2}
        className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#404040] rounded-r-3xl bg-black/[0.1] dark:bg-white/[0.15]"
      >
        <IoIosSearch className="text-black/[0.9] dark:text-white text-xl" />
      </button>
    </div>
  );
};

export default SearchInput;
