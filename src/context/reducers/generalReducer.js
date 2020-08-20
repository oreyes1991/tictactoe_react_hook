import { getWinner, IATurn, setQuad } from '../../utils'
export const generalStates = {
	turn: 'x',
	quads: [0,0,0,0,0,0,0,0,0],
	winner: false
}

let newQuads;

export const generalReducer = (state, action) => {
	console.log(state, action)
	switch (action.type) {
		case 'SET_QUAD_VALUE':
			newQuads = setQuad(action.index, action.turn, state.quads);
			return {
				...state,
				quads: newQuads,
				winner: getWinner(newQuads),
				turn: state.turn === 'x' ? 'o' : 'x' 
			}
		case 'IA_TURN':
			newQuads = IATurn(state.quads, state.winner);
			return {
				...state,
				quads: newQuads,
				winner: getWinner(newQuads),
				turn: 'x'
			}
		case 'RESET_GAME': 
			return {
				turn: 'x',
				quads: [0,0,0,0,0,0,0,0,0],
				winner: false
			}
		default:
			throw new Error("Unexpected action");
	}
};