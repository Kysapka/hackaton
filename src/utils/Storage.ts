import {RootStateType} from "../Store/Store";


export const loadState = () => {
    try {
        let serializedState = localStorage.getItem('app_state')
        if (serializedState === null) {
            return undefined
        }
        let loadedState =  JSON.parse(serializedState)
        return loadedState
    } catch (err) {
        return undefined
    }

}

export const saveState = (state: RootStateType) => {
    try {
        localStorage.setItem('app_state', JSON.stringify(state))
    }
    catch (err) {
        // ignore write error
    }
}