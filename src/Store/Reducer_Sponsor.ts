import {v1} from "uuid";

const ADD_SPONSOR = 'ADD_SPONSOR'

export type sponsorsStateType = typeof initSponsorState

export type sponsorsActionTypes = addSponsorAT

export type addSponsorAT=ReturnType<typeof addSponsorAC>

export const initSponsorState = [
    {
        id: v1(),
        name: "Vasya",
        password: "111",
        radio: "",
        formaContact: false,
        contact: "",
        rating: "",
        events: ""
    }
]

export const SponsorsReducer = (state: sponsorsStateType = initSponsorState, action: sponsorsActionTypes): sponsorsStateType => {
    switch (action.type) {
        case ADD_SPONSOR:
            return [...state, {
                id: action.id,
                name: action.name,
                radio: action.event,
                password: "111",
                formaContact: false,
                contact: "",
                rating: "",
                events: "",
        }]
        default :
            return state
    }
}

export const addSponsorAC = (name: string, formaEnter: boolean, event: string) => ({
    type: "ADD_SPONSOR", id: v1(), name, event} as const)
