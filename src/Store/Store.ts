import {sponsorsActionTypes, SponsorsReducer} from "./Reducer_Sponsor";
import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {childActionTypes, ChildReducer} from "./Reducer_Child";
import thunk from 'redux-thunk'
import {loadState, saveState} from "../utils/Storage";

export type ActionValuesType = sponsorsActionTypes | childActionTypes

let RootReducer = combineReducers({
    sponsors: SponsorsReducer,
    childs: ChildReducer
})

export type RootStateType = ReturnType<typeof RootReducer>

export let store: Store<RootStateType, ActionValuesType> = createStore(RootReducer, loadState(),applyMiddleware(thunk))

store.subscribe(() => {
    saveState(store.getState())
})