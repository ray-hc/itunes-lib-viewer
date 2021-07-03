// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';
import searchObjReducer from './SearchObjReducer';
import resultsReducer from './ResultsReducer';

const rootReducer = combineReducers({
  searchObj: searchObjReducer,
  results: resultsReducer,
});

export default rootReducer;
