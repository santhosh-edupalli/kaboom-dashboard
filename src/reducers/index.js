import { combineReducers } from 'redux'
import { home } from "./home"
  
const mainReducer = combineReducers({
    home : home
});
  
export default mainReducer