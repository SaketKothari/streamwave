import { createContext, useEffect } from 'react';
import { fetchDataFromApi } from '../utils/api';

export const DataContext = createContext();

export const AppContext = (props) => {
  console.log(props.children);
  useEffect(() => {
    fetchSelectedCaregoryData();
  }, []);

  const fetchSelectedCaregoryData = async (query) => {
    const data = await fetchDataFromApi(`search/?q=${query}`);
    console.log(data.contents);
  };

  return (
    <DataContext.Provider value={{}}>{props.children}</DataContext.Provider>
  );
};
