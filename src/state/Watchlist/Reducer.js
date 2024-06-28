import { existInWatchlist } from "@/utils/existInWatchlist";
import {
    ADD_COIN_TO_WATCHLIST_REQUEST,
    GET_USER_WATCHLIST_REQUEST,
    GET_USER_WATCHLIST_SUCCESS,
    ADD_COIN_TO_WATCHLIST_SUCCESS,
    GET_USER_WATCHLIST_FAILURE,
    ADD_COIN_TO_WATCHLIST_FAILURE,
  } from "./ActionType";
  
  const initialState = {
    watchlist: null,
    loading: false,
    error: null,
    items: [],
  };
  
  export const watchlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER_WATCHLIST_REQUEST:
      case ADD_COIN_TO_WATCHLIST_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_USER_WATCHLIST_SUCCESS:
        return {
          ...state,
          watchlist: action.payload,
          loading: false,
          error: null,
        };
      case ADD_COIN_TO_WATCHLIST_SUCCESS:
        let updateItems = existInWatchlist(state.items,action.payload)? state.items.filter((item)=>item.id!==action.payload.id):[action.payload, ...state.items]
        return {
          ...state,
          items: updateItems,
          loading: false,
          error: null,
        };
      case GET_USER_WATCHLIST_FAILURE:
      case ADD_COIN_TO_WATCHLIST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  