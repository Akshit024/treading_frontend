import { api } from "@/config/api"
import { GET_ALL_ORDERS_FAILURE, GET_ALL_ORDERS_REQUEST, GET_ALL_ORDERS_SUCCESS, PAY_ORDER_FAILURE, PAY_ORDER_REQUEST, PAY_ORDER_SUCCESS } from "./ActionType"

export const payOrder=({jwt,orderData,amount})=> async (dispatch)=>{
    dispatch({type:PAY_ORDER_REQUEST})
    try {
        const response = await api.post('/api/order/pay',orderData,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            }
        });
        dispatch({type:PAY_ORDER_SUCCESS,payload:response.data,amount});
    } catch (error) {
        dispatch({type:PAY_ORDER_FAILURE,payload:error.message});
    }
}

export const getAllOrdersForUser=({jwt,orderType,assetSymbol})=> async (dispatch)=>{
    dispatch({type:GET_ALL_ORDERS_REQUEST})
    try {
        const response = await api.get(`/api/order`,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
            params:{
                order_type:orderType,
                asset_symbol:assetSymbol,
            }
        });
        dispatch({type:GET_ALL_ORDERS_SUCCESS,payload:response.data});
    } catch (error) {
        dispatch({type:GET_ALL_ORDERS_FAILURE,payload:error.message});
    }
}