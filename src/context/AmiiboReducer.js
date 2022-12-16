const AmiiboReducer = (state, action) => {
  switch (action.type) {

    case 'GET_AMIIBOS':
      return {
        ...state,
        amiibos: action.payload,
        loading: false
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'CLEAR_AMIIBOS':
      return {
        ...state,
        amiibos: []
      };

    default:
      return state;
  }
};


export default AmiiboReducer;