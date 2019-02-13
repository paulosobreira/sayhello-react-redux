import {createStore} from "redux";
import sayHelloRedux from './reducers/sayHelloRedux'

export default createStore(sayHelloRedux);