import React, { useState, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [allData, setAllData] = useState({});
  const[filterType,setFilterType]=useState('')

  async function getData() {
    return await fetch( 'https://run.mocky.io/v3/6cee870e-47bd-45b7-8650-8c171b6984b5')
      .then((res) => res.json());
  }
  
  useEffect(() => {
   
    getData().then((data) => {
      setAllData(data);
    });
  }, [allData]);



  return (
    <AppContext.Provider value={{allData,filterType,setFilterType}}>
      {children}
    </AppContext.Provider>
  );
};
