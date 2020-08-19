import React, { useContext } from "react";
import { StoreContext } from '../../context/store/storeContext'

const Quad = (props) => {
	const { state, actions } = useContext(StoreContext);
	console.log(state)
	const { setQuadValue } = actions.generalActions;
	const quadValue = state.generalStates.quads[props.index];
	const isTaken = quadValue !== 0;
	return (
		<div className="quad-body" onClick={() => { setQuadValue(props.index, state.generalStates.turn); }}>
			{ isTaken
				? (<div className="quad-icon">{quadValue}</div>)
				: ''
			}
		</div>
	)
}

export default Quad