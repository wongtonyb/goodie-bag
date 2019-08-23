import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

const GOT_CANDIES_FROM_SERVER = 'GOT_CANDIES_FROM_SERVER';
const gotCandies = candies => ({ type: GOT_CANDIES_FROM_SERVER, candies });

export const getCandies = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/candies');
    console.log(data);
    dispatch(gotCandies(data));
  };
};

const initialState = {
  candies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES_FROM_SERVER:
      return { ...state, candies: action.candies };
    default:
      return state;
  }
};

export default createStore(
  // rootReducer,
  reducer,
  composeWithDevTools(
    applyMiddleware(
      // `withExtraArgument` gives us access to axios in our async action creators!
      // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
      thunkMiddleware.withExtraArgument({ axios }),
      loggingMiddleware
    )
  )
);
