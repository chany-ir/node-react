import React, { createContext, useContext } from 'react';


const ApiKeyContext = createContext();


export const ApiKeyProvider = ({ children }) => {
  const apiKey = '000'; 

  return (
    <ApiKeyContext.Provider value={apiKey}>  
      {children}
    </ApiKeyContext.Provider>
  );
};

export const useApiKey = () => {
  return useContext(ApiKeyContext);
};
