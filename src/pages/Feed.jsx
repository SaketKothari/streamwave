import { useContext, useEffect } from 'react';
import { DataContext } from '../context/ApiContext';

import Sidebar from '../components/Sidebar/Sidebar';
import VideoCard from '../components/Videos/VideoCard';

const Feed = () => {
  const { loading, searchResults } = useContext(DataContext);
  // console.log(searchResults);

  useEffect(() => {
    document.getElementById('root').classList.remove('custom-h');
  }, []);

  return (
    <div className="flex h-[calc(100%-56px)]">
      <Sidebar />

      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {/* when data fetching is done means loading is false and that means we get searchResults */}
          {!loading &&
            searchResults.map((item, index) => {
              if (item.type !== 'video') return false;
              return <VideoCard key={index} video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
