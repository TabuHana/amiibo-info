import { createContext, useReducer } from "react";
import AmiiboReducer from "./AmiiboReducer";

const AmiiboContext = createContext();

const AMIIBO_URL = process.env.REACT_APP_AMIIBO_URL;

export const AmiiboProvider = ({ children }) => {
  const initialState = {
    amiibos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(AmiiboReducer, initialState);

  const searchAmiibo = () => {
    console.log('Searching')
  }

  const clearAmiibo = () => dispatch({ type: 'CLEAR_AMIIBO' });

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return <AmiiboContext.Provider value={ {
    amiibos: state.users,
    loading: state.loading,
    clearAmiibo,
    searchAmiibo
  } }>
    { children }
  </AmiiboContext.Provider>;

};

export default AmiiboContext;