import React, { createContext, useState } from "react";

const PanierContext = createContext();

export const PanierContextProvider = ({ children }) => {
  const [initialState, setInitialState] = useState("patrick");

  return (
    <PanierContext.Provider value={{ initialState, setInitialState }}>
      {children}
    </PanierContext.Provider>
  );
};

export default PanierContext;
