import {configureStore, createStore, applyMiddleware, compose} from '@reduxjs/toolkit';
import RootReducer from './reducers/RootReducer';
import thunk from 'redux-thunk';

// const middlewareList = [thunk];
const middlewareEnhancer = applyMiddleware(thunk);

const enhancerList = [];
if(window.__REDUX_DEVTOOLS_EXTENSION__) enhancerList.push(window.__REDUX_DEVTOOLS_EXTENSION__())
const composeEnhancers = compose(middlewareEnhancer, ...enhancerList);

export const store = createStore(RootReducer, composeEnhancers);

// export const store = createStore(RootReducer,
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export const store = createStore( {
//     RootReducer,
//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware({
//             thunk: {
//                 extraArgument: myCustomApiService
//             }
//         }),
// }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );