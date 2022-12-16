const AmiiboReducer = (state, action) => {
  switch (action.type) {

    case 'GET_AMIIBOS':
      return {
        ...state,
        amiibos: action.payload,
        loading: false
      };

    case 'GET_ONE':
      return {
        ...state,
        amiibo: action.payload,
        loading:false
      }

    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'CLEAR_AMIIBOS':
      return {
        ...state,
        amiibos: [],
      };

    case 'CLEAR_SINGLE':
      return {
        ...state,
        amiibo: {},
      }

    case 'CLEAR_ALL':
      return {
        ...state,
        amiibos: [],
        amiibo: {},
        loading: false,
      }

    default:
      return state;
  }
};


export default AmiiboReducer;