export const generalStates = {
	turn: 'x',
	quads: [0,0,0,0,0,0,0,0,0]
}

export const generalReducer = (state, action) => {
	console.log(state, action)
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				count: state.count + 1
			};
		case "SET_QUAD_VALUE":
			return {
				...state,
				quads: setQuad(action.index, action.turn, state.quads),
				turn: state.turn === 'x' ? 'o' : 'x' 
			}
		default:
			throw new Error("Unexpected action");
	}
};


function setQuad(index, turn, quads) {
	quads[index] = turn;
	return quads;
}