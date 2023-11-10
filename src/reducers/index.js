import { combineReducers } from 'redux';
import favoriteReducer from './favoriteReducers'
import movieReducer from './movieReducer';


const rootReducer = combineReducers({
    movieReducer,
    favoriteReducer
})
export default rootReducer;