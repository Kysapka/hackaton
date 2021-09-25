import {v1} from "uuid";

export type initUserType = typeof initUserState

export const initUserState = [
    {
        id: v1(),
        name: "",
        formaEnter: false,
        radio: "event",
        formaContact: false,
        contact: "",
        rating: "",
        events: ""
    }
]

export const UsersReducer = (state: initUserType, action: any): initUserType => {
    switch (action.type) {
        case "SET_START_USERS":
            return state.map(el=>el.id===action.id ? {...el,...action.payload} :el )
        default :
            return state
    }
}

export type setUsersStartAT=ReturnType<typeof setUsersStartAC>
export const setUsersStartAC = (id:string,name: string, form: boolean, event: string) => {
    return {
        type: "SET_START_USERS",
        payload: {
            id,
            name,
            form,
            event
        }
    }
}