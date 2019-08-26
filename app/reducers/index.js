import candyReducer from './candies';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  candies: candyReducer,
});

export default rootReducer;
