import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { combineReducers } from "redux";
import  thunk  from  'redux-thunk';
import ChatReducer from "./chat-reducer";
import UsersReducer from "./users-reducer";


const reducers = combineReducers({
    loginPage: UsersReducer,
    myChats: ChatReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;