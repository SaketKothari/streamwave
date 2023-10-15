import { createContext, useEffect, useState } from 'react';
import { fetchDataFromApi } from '../utils/api';

export const DataContext = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState('loading');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('New');

  useEffect(() => {
    fetchSelectedCaregoryData(selectedCategory);
  }, [selectedCategory]);

  const fetchSelectedCaregoryData = async (query) => {
    setLoading(true);
    const data = await fetchDataFromApi(`search/?q=${query}`);
    setSearchResults(data.contents);
    setLoading(false);
  };

  return (
    <DataContext.Provider
      value={{
        loading,
        setLoading,
        mobileMenu,
        setMobileMenu,
        selectedCategory,
        setSelectedCategory,
        searchResults,
        setSearchResults,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
