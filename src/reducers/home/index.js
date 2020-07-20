import * as actionTypes from "../../actions/Home/actionTypes"
import * as DATA_CONVERTERS from './converters'

const getInitialState = () => {  
    return {
        loading: false,
        historical_data: [],
        live_data:[],
        errorMessage : null
    }
}

const initialState = getInitialState();

export const home = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MAKE_HISTORICAL_DATA_REQUEST:
            return{
                ...state,
                loading : true,
                errorMessage :null
            }
        case actionTypes.HISTORICAL_DATA_REQUEST_SUCCESS:
            return{
                ...state,
                loading : false,
                historical_data :DATA_CONVERTERS.formatHistoricalData(action.data) 
            }
        case actionTypes.HISTORICAL_DATA_REQUEST_FAILURE:
            return{
                ...state,
                loading : false,
                errorMessage : action.errorMessage
            }
        case actionTypes.SUBSCRIBE_TO_DATA_SUCCESS:
            return{
                ...state,
                live_data : [DATA_CONVERTERS.formatDataPoint(action.data), ...state.live_data]
            }
        default:
            return {
                ...state
            };
    }
};