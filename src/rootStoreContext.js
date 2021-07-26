import React from 'react'

const RootStoreContext = React.createContext({});
export const RootStoreProvider = RootStoreContext.Provider;
export const useRootStore = () => React.useContext(RootStoreContext);