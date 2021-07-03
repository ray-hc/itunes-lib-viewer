import { ActionTypes } from '../actions';

const initialState = null;

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
