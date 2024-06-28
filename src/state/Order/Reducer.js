import { GET_ALL_ORDERS_FAILURE, GET_ALL_ORDERS_REQUEST, GET_ALL_ORDERS_SUCCESS, PAY_ORDER_FAILURE, PAY_ORDER_REQUEST, PAY_ORDER_SUCCESS } from "./ActionType"

const initialState={
    order:null,
    orders:[],
    loading:false,
    error:null,
}

export const orderReducer=(state=initialState,action)=>{
    switch(action.type){
        case PAY_ORDER_REQUEST:
        case GET_ALL_ORDERS_REQUEST:
            return{
                ...state,
                loading:true,
                error:null,
            }
        case PAY_ORDER_SUCCESS:
            return{
                ...state,
                order:action.payload,
                error:null,
                loading:false
            }        
        case GET_ALL_ORDERS_SUCCESS:
            return{
                ...state,
                error:null,
                orders:action.payload,
                loading:false,
            }    
        case PAY_ORDER_FAILURE:
        case GET_ALL_ORDERS_FAILURE:
            return{
                ...state,
                error:action.error,
                loading:false,
            }
        default:
            return state;            
    }
}