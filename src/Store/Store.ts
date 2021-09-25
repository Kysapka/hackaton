import {setUsersStartAT, UsersReducer} from "./Reducer_User";
import {combineReducers, createStore, Store} from "redux";
import {ChildReducer} from "./Reducer_Child";

export type ActionValuesType = setUsersStartAT

let RootReducer = combineReducers({
    users: UsersReducer,
    childs: ChildReducer
})

export type RootStateType = ReturnType<typeof RootReducer>

export let store: Store<RootStateType, ActionValuesType> = createStore(RootReducer)