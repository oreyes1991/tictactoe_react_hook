import React, { useContext } from "react";
import { StoreContext } from '../../context/store/storeContext';
import exImg from '../../assets/img/times-solid.svg';
import circleImg  from '../../assets/img/circle-regular.svg';

const Quad = (props) => {
	const { state, actions } = useContext(StoreContext);
	//console.log(state)
	const { setQuadValue } = actions.generalActions;
	const quadValue = state.generalStates.quads[props.index];
	const isTaken = quadValue !== 0;
	return (
		<div className="quad-body" onClick={() => { setQuadValue(props.index, state.generalStates.turn); }}>
			{ isTaken
				? (<div className="quad-icon">
					<img src={ quadValue === 'x' ? exImg : circleImg} />
				</div>)
				: ''
			}
		</div>
	)
}

export default Quad