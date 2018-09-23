import * as Actions from '../actions/actions';

const initState = {
  pictures: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case Actions.ACTION_PICTURES_LOAD_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case Actions.ACTION_UPDATE_PICTURE_RATE_SUCCESS:
      return {
        ...state,
        pictures: state.pictures.map((item, index) => {
          if(index === action.payload.index) {
            return { ...item, rate: action.payload.rate};
          }
          return {...item};
        })
      };
    default:
      return state;

  }
};
