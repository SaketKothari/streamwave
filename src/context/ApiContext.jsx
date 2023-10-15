import { createContext, useEffect, useState } from 'react';
import { fetchDataFromApi } from '../utils/api';

export const DataContext = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState('loading');

  useEffect(() => {
    fetchSelectedCaregoryData();
  }, []);

  const fetchSelectedCaregoryData = async (query) => {
    setLoading(true);
    const data = await fetchDataFromApi(`search/?q=${query}`);
    console.log(data.contents);
    setLoading(false);
  };

  return (
    <DataContext.Provider value={{ loading, setLoading }}>
      {props.children}
    </DataContext.Provider>
  );
};
