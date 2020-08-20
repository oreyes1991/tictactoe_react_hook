import React, { useContext } from "react";
import { StoreContext } from '../../context/store/storeContext';
import exImg from '../../assets/img/times-solid.svg';
import circleImg  from '../../assets/img/circle-regular.svg';

const WinnerModal = (props) => {
	const { actions } = useContext(StoreContext);
	const { resetGame } = actions.generalActions;
	return (
		<div className={props.visible ? "modal-wrapper" : "hidden"}>
			<div className={props.visible.tie ? "modal-box tie" : "modal-box"}>
				{
					props.visible.tie ? (<img src={exImg} alt="symbol"/>) : ''
				}
				<img src={ props.symbol === 'x' ? exImg : circleImg } alt="symbol"/>
				<h1> { props.visible.tie ? 'Tie' : 'Winner' } </h1>
				<button onClick={() => { resetGame() }}> Restart Game </button>
			</div>
		</div>
	)
}

export default WinnerModal