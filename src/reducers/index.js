import { combineReducers } from 'redux';
import pages from "./pages.js"
import getState from "./getState.js"
import  routerReducer  from './routing.js'
export const rootReducer= combineReducers({
    pages
});

