import { createContext, useReducer } from "react";
import AmiiboReducer from "./AmiiboReducer";


const AmiiboContext = createContext();

const AMIIBO_URL = process.env.REACT_APP_AMIIBO_URL;

export const AmiiboProvider = ({ children }) => {
  const initialState = {
    amiibos: [],
    amiibo: {},
    loading: false
  };

  const [state, dispatch] = useReducer(AmiiboReducer, initialState);

  const searchAmiibos = async (text) => {
    setLoading();

    const response = await fetch(`${ AMIIBO_URL }/?character=${ text }`);
    if (!response.ok) {
      console.log('Search failed...')
      reset();
    } else {
      const { amiibo } = await response.json();
      dispatch({
        type: 'GET_AMIIBOS',
        payload: amiibo,
      });

    }
  };

  const getAmiiboInfo = async (id) => {
    setLoading();

    const response = await fetch(`${ AMIIBO_URL }/?id=${ id }&showgames`);
    if (!response.ok) {
      console.log('Something went wrong...')
      reset();
    } else {
      const { amiibo } = await response.json();
      dispatch({
        type: 'GET_ONE',
        payload: amiibo,
      });
    }
  };

  const clearAmiibos = () => dispatch({ type: 'CLEAR_AMIIBOS' });

  const clearAmiibo = () => dispatch({ type: 'CLEAR_SINGLE' });

  const reset = () => dispatch({ type: 'CLEAR_ALL' });

  const setLoading = () => dispatch({ type: 'SET_LOADING' });


  return <AmiiboContext.Provider value={ {
    amiibos: state.amiibos,
    loading: state.loading,
    amiibo: state.amiibo,
    clearAmiibos,
    clearAmiibo,
    searchAmiibos,
    getAmiiboInfo,
    reset
  } }>
    { children }
  </AmiiboContext.Provider>;

};

export default AmiiboContext;