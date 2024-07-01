import {
  FETCH_COIN_DETAILS_FAILURE,
  FETCH_COIN_DETAILS_REQUEST,
  FETCH_COIN_DETAILS_SUCCESS,
  FETCH_COIN_LIST_FAILURE,
  FETCH_COIN_LIST_REQUEST,
  FETCH_COIN_LIST_SUCCESS,
  FETCH_MARKET_CHART_FAILURE,
  FETCH_MARKET_CHART_REQUEST,
  FETCH_MARKET_CHART_SUCCESS,
  SEARCH_COIN_FAILURE,
  SEARCH_COIN_REQUEST,
  SEARCH_COIN_SUCCESS,
} from "./ActionType";
import { api } from "@/config/api";

export const getCoinList = (page) => async (dispatch) => {
  dispatch({ type: FETCH_COIN_LIST_REQUEST });
  try {
    const response = await api.get(`/coins?page=${page}`);
    const data = response.data;
    dispatch({ type: FETCH_COIN_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_COIN_LIST_FAILURE, payload: error.message });
  }
};

export const fetchMarketChartData =
  ({ coinId, days }) =>
  async (dispatch) => {
    dispatch({ type: FETCH_MARKET_CHART_REQUEST });
    try {
      const { data } = await api.get(`/coins/${coinId}/chart?days=${days}`);
      dispatch({ type: FETCH_MARKET_CHART_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_MARKET_CHART_FAILURE });
    }
  };

export const searchCoin = (keyword) => async (dispatch) => {
  dispatch({ type: SEARCH_COIN_REQUEST });
  try {
    const { data } = await api.get(`/coins/search?q=${keyword}`);
    dispatch({ type: SEARCH_COIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SEARCH_COIN_FAILURE });
  }
};

export const fetchCoinDetails =
  ({ coinId }) =>
  async (dispatch) => {
    dispatch({ type: FETCH_COIN_DETAILS_REQUEST });
    try {
      const { data } = await api.get(`/coins/details/${coinId}`);
      dispatch({ type: FETCH_COIN_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_COIN_DETAILS_FAILURE });
    }
  };
