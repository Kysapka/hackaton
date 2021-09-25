import { v1 } from 'uuid';

const ADD_CHILD = 'ADD_CHILD';

export type childStateType = typeof initChildState

export type childActionTypes = addChildAT

type addChildAT = ReturnType<typeof addChildAC>

export const initChildState = [
	{
		id: v1(),
		login: 'ivan_01',
		pass: '123',
		valueName: 'Ivan',
		valueYears: '10',
		valueJob: '',
		valueArea: '',
	},
];

export const ChildReducer = (state: childStateType = initChildState, action: childActionTypes): childStateType => {
	switch (action.type) {
		case ADD_CHILD:
			return [ ...state, {
				id: action.id,
				login: action.login,
				pass: action.pass,
				valueYears: action.valueYears,
				valueName: action.valueName,
				valueJob: action.valueJob,
				valueArea: action.valueArea,
			} ];
		default :
			return state;
	}
};

export const addChildAC = (login: string, pass: string, valueYears: string, valueName: string, valueJob: string, valueArea: string) => ({
	type: ADD_CHILD, id: v1(),
	login, pass, valueYears, valueName, valueJob, valueArea,
} as const);