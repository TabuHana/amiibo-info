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

  const searchAmiibo = async (text) => {
    setLoading();

    const response = await fetch(`${ AMIIBO_URL }/?character=${ text }`);
    if (!response.ok) {
      console.log('error');
    } else {
      const { amiibo } = await response.json();

      dispatch({
        type: 'GET_AMIIBOS',
        payload: amiibo,
      });

    }
  };

  const clearAmiibo = () => dispatch({ type: 'CLEAR_AMIIBOS' });

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return <AmiiboContext.Provider value={ {
    amiibos: state.amiibos,
    loading: state.loading,
    clearAmiibo,
    searchAmiibo
  } }>
    { children }
  </AmiiboContext.Provider>;

};

export default AmiiboContext;