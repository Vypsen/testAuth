import { applyMiddleware, createStore } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import userReducer from './userReducer';
import thunk from 'redux-thunk'


export const store = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)))