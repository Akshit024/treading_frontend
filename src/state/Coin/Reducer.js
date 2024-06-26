/* eslint-disable no-unused-vars */
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

  const initialState ={
    coinList:[],
    searchCoinList:[],
    marketChart:{data:[],loading:false},
    coinById:null,
    coinDetails:null,
    loading:false,
    error:null,
  }

  export const coinReducer = (state = initialState,action)=>{
    switch(action.type){
        case FETCH_COIN_LIST_REQUEST:
        case FETCH_COIN_DETAILS_REQUEST:
        case SEARCH_COIN_REQUEST:
            return {...state,loading:true,error:null}
                    
            
        case FETCH_MARKET_CHART_REQUEST:
            return{
                ...state,
                marketChart:{loading:true,data:[]},
                error:null
            }
        
        case FETCH_COIN_LIST_SUCCESS:
            return {
                ...state,
                coinList:action.payload,
                loading:false,
                error:null
            } 
        case FETCH_MARKET_CHART_SUCCESS:
            return {
                ...state,
                marketChart:{data:action.payload,loading:false},
                error:null
            }  
        case SEARCH_COIN_SUCCESS:
            return {
                ...state,
                searchCoinList:action.payload.coins,
                loading:false,
                error:null
            }  
        case FETCH_COIN_DETAILS_SUCCESS:
            console.log("details",action.payload);
            return {
                ...state,
                coinDetails:action.payload,
                loading:false,
                error:null
            }
        case FETCH_MARKET_CHART_FAILURE:
            return {
                ...state,
                marketChart:{loading:false,data:[]},
                loading:false,
                error:null
            }
        
        case FETCH_COIN_LIST_FAILURE:
        case FETCH_COIN_DETAILS_FAILURE:
        case SEARCH_COIN_FAILURE:
            return {...state,loading:false,error:action.payload}
        
        default:       
            return state;
    }
  }