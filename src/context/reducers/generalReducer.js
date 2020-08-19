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
			newQuads = IATurn(state.quads);
			return {
				...state,
				quads: newQuads,
				winner: getWinner(newQuads),
				turn: 'x'
			}
		default:
			throw new Error("Unexpected action");
	}
};

function getWinner(quads) {
	// vertical stripe win
	for(let i=0; i < 3; i++) {
		if(quads[i] !== 0 && quads[i] === quads[i + 3] && quads[i + 3] === quads[i + 6]) {
			return { cords:[i, i+3, i+6], symbol: quads[i]};
		}
	}
	// horizontal stripe win
	for(let i=0; i < 9; i = i + 3) {
		if(quads[i] !== 0 && quads[i] === quads[i+1] && quads[i+1] === quads[i+2]) {
			return {cords: [i, i+1, i+2], symbol: quads[i]};
		}
	}
	// Diagonal left up
	if(quads[0] !== 0 && quads[0] === quads[4] && quads[4] === quads[8]) {
		return {cords: [0,4,8], symbol: quads[0]}
	}
	// Diagonal right up
	if(quads[2] !== 0 && quads[2] === quads[4] && quads[4] === quads[6]) {
		return {cords: [2, 4, 6], symbol: quads[2]}
	}
	return false;
}

function IATurn(quads) {
	const pos = smarPos(quads);
	return setQuad(pos, 'o', quads)
}

function smarPos(quads) {
	const random = Math.floor(Math.random() * (9 - 0)) + 0;
	if (quads[random] === 0) {
		return random
	}
	return smarPos(quads);
}


function setQuad(index, turn, quads) {
	quads[index] = turn;
	return quads;
}