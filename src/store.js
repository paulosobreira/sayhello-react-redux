import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
import sayHelloRedux from './reducers/sayHelloRedux'
import sayGoodByeRedux from './reducers/sayGoodByeRedux'

export default createStore(combineReducers({sayHelloRedux,sayGoodByeRedux}),applyMiddleware(thunk));