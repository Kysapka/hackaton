import {v1} from "uuid";

const ADD_CHILD = 'ADD_CHILD'

export type childStateType = typeof initChildState

export type childActionTypes = addChildAT

type addChildAT = ReturnType<typeof addChildAC>

export const initChildState = [
    {
        id: v1(),
        name: "Ivan",
        radio: "event",
        formaContact: false,
        contact: "",
        rating: "",
        events: ""
    }
]

export const ChildReducer = (state: childStateType = initChildState, action: childActionTypes): childStateType => {
    switch (action.type) {
        case ADD_CHILD:
            return [...state]
        default :
            return state
    }
}

export const addChildAC = (name: string) => ({type: ADD_CHILD, id: v1(), name} as const)