import { api } from "@/config/api";
import { DEPOSITE_MONEY_FAILURE, DEPOSITE_MONEY_REQUEST, DEPOSITE_MONEY_SUCCESS, GET_USER_WALLET_FAILURE, GET_USER_WALLET_REQUEST, GET_USER_WALLET_SUCCESS, GET_WALLET_TRANSACTION_FAILURE, GET_WALLET_TRANSACTION_REQUEST, GET_WALLET_TRANSACTION_SUCCESS, TRANSFER_MONEY_FAILURE, TRANSFER_MONEY_REQUEST, TRANSFER_MONEY_SUCCESS } from "./ActionType"

export const getUserWallet = (jwt) => async(dispatch) => {
    dispatch({type:GET_USER_WALLET_REQUEST});

    try {
        const response = await api.get("/api/wallet",{
            headers:{
                Authorization:`Bearer ${jwt}`,
            }
        });
        dispatch({type:GET_USER_WALLET_SUCCESS,payload:response.data});
    } catch (error) {
        dispatch({type:GET_USER_WALLET_FAILURE,error:error.message});
    }
}

export const getWalletTransaction = (jwt) => async(dispatch) => {
    dispatch({type:GET_WALLET_TRANSACTION_REQUEST});

    try {
        const response = await api.get("/api/transaction",{
            headers:{
                Authorization:`Bearer ${jwt}`,
            }
        });
        dispatch({type:GET_WALLET_TRANSACTION_SUCCESS,payload:response.data});
    } catch (error) {
        dispatch({type:GET_WALLET_TRANSACTION_FAILURE,error:error.message});
    }
}

export const depositeMoney = ({jwt,orderId,paymentId,navigate}) => async(dispatch) => {
    dispatch({type:DEPOSITE_MONEY_REQUEST});

    try {
        const response = await api.put("/api/wallet/deposit",null,{
            params:{
                order_id:orderId,
                payment_id:paymentId
            },
            headers:{
                Authorization:`Bearer ${jwt}`,
            }
        });
        navigate("/wallet");
        dispatch({type:DEPOSITE_MONEY_SUCCESS,payload:response.data});
    } catch (error) {
        dispatch({type:DEPOSITE_MONEY_FAILURE,error:error.message});
    }
}

export const paymentHandler = ({jwt,amount,paymentMethod}) => async(dispatch) => {
    dispatch({type:DEPOSITE_MONEY_REQUEST});

    try {
        const response = await api.post(`/api/payment/${paymentMethod}/amount/${amount}`,null,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            }
        });
        window.location.href = response.data.payment_url;
        // dispatch({type:DEPOSITE_MONEY_SUCCESS,payload:response.data});
    } catch (error) {
        dispatch({type:DEPOSITE_MONEY_FAILURE,error:error.message});
    }
}

export const transferMoney = ({jwt,walletId,reqData}) => async(dispatch) => {
    dispatch({type:TRANSFER_MONEY_REQUEST});

    try {
        const response = await api.put(`/api/wallet/${walletId}/transfer`,reqData,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            }
        });
        dispatch({type:TRANSFER_MONEY_SUCCESS,payload:response.data});
    } catch (error) {
        dispatch({type:TRANSFER_MONEY_FAILURE,error:error.message});
    }
}