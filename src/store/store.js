import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weatherReducer from "../reducers/weatherReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers( {
    weather: weatherReducer,
} )

const store = configureStore( {
    reducer: rootReducer,
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( thunk ),
} );

export default store;
