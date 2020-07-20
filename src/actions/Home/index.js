import * as actionTypes from './actionTypes'
import {axiosRequest} from '../../compounds/network/axiosApi/axiosApi'
import socket from '../../compounds/network/socket/socket'
import * as CONSTANTS from '../../config/constants'

const HISTORICAL_DATA_URL = '/api/historical'

export function getHistoricalData(){
    return (dispatch) =>{
        dispatch({
            type: actionTypes.MAKE_HISTORICAL_DATA_REQUEST,
        });
        return axiosRequest.request({
            url: HISTORICAL_DATA_URL,
            method: 'GET',
        }).then((response) => {
            const data = response.data;
            dispatch({
                type: actionTypes.HISTORICAL_DATA_REQUEST_SUCCESS,
                data: data,
            });
        }).catch((error) => {
            const response = error.data;
            const errorMessage = (response && response.message) || CONSTANTS.DEFAULT_API_FAIL_MESSAGE;
            dispatch({
                type: actionTypes.HISTORICAL_DATA_REQUEST_FAILURE,
                message: errorMessage,
            });
        });
    }
}

export const subscribeToData = () => {
    return (dispatch) => {
        socket.subscribeToData((err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            dispatch({
                type: actionTypes.SUBSCRIBE_TO_DATA_SUCCESS,
                data,
            });
        });
    }
}

export const unsubscribeToData = () => {
	return (dispatch) => {
        socket.unSubscribeToData();
    }
}