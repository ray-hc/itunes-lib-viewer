export const ActionTypes = {
  SET_RESULTS: 'SET_RESULTS',
  SET_SEARCH: 'SET_SEARCH',
};

export function setResults(tracks) {
  return { type: ActionTypes.SET_RESULTS, payload: tracks };
}

export function setSearch(searchObj) {
  return { type: ActionTypes.SET_SEARCH, payload: searchObj };
}
