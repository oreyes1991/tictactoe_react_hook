export const generalActions = (props) => {
	return {
		setQuadValue: (index, turn) => {
			props.dispatch({ type: 'SET_QUAD_VALUE', index, turn })
		},
		setIATurn: () => {
			props.dispatch({ type: 'IA_TURN' });
		},
		resetGame: () => {
			props.dispatch({ type: 'RESET_GAME' });
		}
	}
}