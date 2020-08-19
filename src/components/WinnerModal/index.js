import React from "react";
import exImg from '../../assets/img/times-solid.svg';
import circleImg  from '../../assets/img/circle-regular.svg';

const WinnerModal = (props) => {
	return (
		<div className="modal-wrapper">
			<div>
				<img src={ props.symbol === 'x' ? exImg : circleImg } alt="symbol"/>
				<h1> Winner </h1>
				<button onClick={() => {  }}> Restart Game </button>
			</div>
		</div>
	)
}

export default WinnerModal