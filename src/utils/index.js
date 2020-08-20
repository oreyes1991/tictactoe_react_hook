export const getWinner = (quads) => {
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
	// check tie
	let isFull = true
	for (let i = 0; i < 9; i++) {
		if(quads[i] === 0) {
			isFull = false
		}
	}
	return isFull ? { tie:true } : false;
}

export const IATurn = (quads, winner) => {
	if(winner) return quads;
	const pos = smarPos(quads);
	return setQuad(pos, 'o', quads)
}

function smarPos(quads) {
	const random = Math.floor(Math.random() * (9 - 0)) + 0;
	const { playerPos, IAPos} = getPlayedPos(quads);
	if(playerPos.length < 2) {
		if (quads[random] === 0) {
			return random
		}
	} else {
		const block = getBlockOrWin(playerPos, quads)
		const win = getBlockOrWin(IAPos, quads)
		if (win !== undefined) {
			return win
		}
		if(block !== undefined) {
			return block;
		}
		if (quads[random] === 0) {
			return random
		}
	}
	return smarPos(quads);
}

function getBlockOrWin(playerPos, quads) {
	const strPs = playerPos.join();
	// vertical stripe win
	for(let i=0; i < 3; i++) {
		const verticalMatch = strPs.match(new RegExp(`(${i}|${i + 3}|${i + 6})`,'g'));
		if(verticalMatch!== null && verticalMatch.length > 1) {
			const ret = evaluatePattern(verticalMatch, [i, i + 3,i + 6])
			if(quads[ret] === 0) return ret;
		}
	}
	// horizontal stripe win
	for(let i=0; i < 9; i = i + 3) {
		const horizontalMatch = strPs.match(new RegExp(`(${i}|${i + 1}|${i + 2})`,'g'));
		if(horizontalMatch !== null && horizontalMatch.length > 1) {
			const ret = evaluatePattern(horizontalMatch, [i, i + 1,i + 2])
			if(quads[ret] === 0) return ret;
		}
	}
	// Diagonal left up
	const diagLeftMatch = strPs.match(new RegExp(`(0|4|8)`,'g'));
	if(diagLeftMatch !== null && diagLeftMatch.length > 1) {
		const ret = evaluatePattern(diagLeftMatch, [0,4,8])
		if(quads[ret] === 0) return ret;
	}
	// Diagonal right up
	const diagRightMatch = strPs.match(new RegExp(`(2|4|6)`,'g'));
	if(diagRightMatch !== null && diagRightMatch.length > 1) {
		const ret = evaluatePattern(diagRightMatch, [2,4,6])
		if(quads[ret] === 0) return ret;
	}
}

function evaluatePattern(pat, win) {
	const str = pat.join();
	let ret = 0
	for (let i = 0; i < 3; i++) {
		if(str.match(new RegExp(`(${win[i]})`)) === null) {
			ret = win[i]
		}
	}
	return ret
}

function getPlayedPos(quads) {
	const playerPos = [];
	const IAPos = [];
	for (let i = 0; i < 9; i++) {
		if(quads[i] === 'x') {
			playerPos.push(i);
		} else if(quads[i] === 'o') {
			IAPos.push(i)
		}
	}
	return { playerPos, IAPos };
}

export const setQuad = (index, turn, quads) => {
	quads[index] = turn;
	return quads;
}
