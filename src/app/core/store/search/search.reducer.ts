import * as SearchActions from './search.actions';
import {Search,initialState} from './search.model';

export function searchReducer(state:Search = initialState,action:SearchActions.All):Search{
  switch (action.type) {
    case SearchActions.UPDATE_QUERY:return Object.assign({},state,{query:action.payload});
    case SearchActions.SEARCH_NEW_QUERY:return Object.assign({},state,{query:action.payload,isSearching:true});
    case SearchActions.UPDATE_QUERY_PARAM:
      const queryParams = Object.assign({},state.queryParams,action.payload);
      return Object.assign({},state,{queryParams});
    case SearchActions.UPDATE_SUGGESTIONS:return Object.assign({},state,{suggestions:action.payload});
    case SearchActions.SEARCH_RESULTS_RETURNED:
      const {nextPageToken,prevPageToken} = action.payload;
      const statePageToken = state.pageToken;
      const pageToken = {
        next:nextPageToken || statePageToken.next,
        prev:prevPageToken || statePageToken.prev};
      return Object.assign({},state,{pageToken});
    case SearchActions.SEARCH_STARTED:return Object.assign({},state,{isSearching:true});
    case SearchActions.TOGGLE_ADV_SEARCH:return Object.assign({},state,{isAdvSearch:!state.isAdvSearch});
    case SearchActions.ADD_RESULTS:
      return Object.assign({},state,{
        results:[...state.results,...action.payload],
        isSearching:false});
    case SearchActions.RESET_RESULTS:return Object.assign({},state,{results:[]});
    case SearchActions.ERROR_RESULTS:return Object.assign({},state,{err:action.payload});
    default: return Object.assign({},initialState,state);}};