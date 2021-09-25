import {v1} from "uuid";

export type initUserType = typeof ChildState

export const ChildState = [
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

export const ChildReducer = (state: initUserType, action: any): initUserType => {
    switch (action.type) {
        case "SET_START_CHILD":
            return [...state]
        default :
            return state
    }
}

export type setChildStartAT=ReturnType<typeof setChildStartAC>

export const setChildStartAC = (id:string,name: string) => {
    return {
        type: "SET_START_CHILD",
        payload: {
            id,
            name,
        }
    }
}