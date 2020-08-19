import React, { useContext } from "react";
import { StoreContext } from './context/store/storeContext';
import Quad  from './components/Quad/';
import WiningModal from './components/WinnerModal';
import './sass/index.scss';

function getQuads() {
	const resp = [];
	for(let i=0; i < 9; i++) {
		resp.push((<Quad key={i} index={i}/>))
	}
	return resp
}

const App = () => {
	const { state, actions } = useContext(StoreContext);
	const {winner} = state.generalStates;
	return (
		<div className={!winner ? "main-game" : 'finished-game'}>
			{!winner ? getQuads() : (<WiningModal symbol={winner.symbol}/>) }
		</div>
	);
};

export default App;
