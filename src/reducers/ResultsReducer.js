import { ActionTypes } from '../actions';

const initialState = [];

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_RESULTS:
      return action.payload;
    default:
      return state;
  }
};

export default resultsReducer;
