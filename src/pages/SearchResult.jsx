import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { DataContext } from '../context/ApiContext';
import { fetchDataFromApi } from '../utils/api';

import Sidebar from '../components/Sidebar/Sidebar';
import ShimmerVideoSearchResult from '../components/Shimmer/ShimmerVideoSearchResult';
import VideoCardSearchResult from '../components/Videos/VideoCardSearchResult';

const SearchResult = () => {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const { setLoading } = useContext(DataContext);

  useEffect(() => {
    document.getElementById('root').classList.remove('custom-h');
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = async () => {
    setLoading(true);
    const data = await fetchDataFromApi(`search/?q=${searchQuery}`);
    // console.log(data);
    setResult(data?.contents);
    setLoading(false);
  };

  return (
    <div className="flex h-[calc(100%-56px)]">
      <Sidebar />

      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result === ''
            ? Array(20)
                .fill('')
                .map((e, index) => {
                  return <ShimmerVideoSearchResult key={index} />;
                })
            : result?.map((item, index) => {
                if (item?.type !== 'video') return false;
                return (
                  <VideoCardSearchResult key={index} video={item?.video} />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
