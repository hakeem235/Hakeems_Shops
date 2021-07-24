import React, { createContext, useContext } from "react";
import { Provider } from 'react-redux';
import store from './store';

const StoreContext = createContext();
// const { Provider } = StoreContext;

const StoreProvider = ({ ...props }) => {
 
  return <Provider store={store} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };