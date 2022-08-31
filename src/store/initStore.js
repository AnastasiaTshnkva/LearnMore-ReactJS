import {configureStore, createStore, applyMiddleware, compose} from '@reduxjs/toolkit';
import RootReducer from "./reducers/RootReducer";

const middlewareList = [];
const middlewareEnhancer = applyMiddleware(...middlewareList);

const enhancerList = [];
if(window.__REDUX_DEVTOOLS_EXTENSION__) enhancerList.push(window.__REDUX_DEVTOOLS_EXTENSION__())
const composeEnhancers = compose(middlewareEnhancer, ...enhancerList);


export const store = createStore(RootReducer, composeEnhancers);