import React  from "react";
import Quad  from './components/Quad/';
import './sass/index.scss';

function getQuads() {
	const resp = [];
	for(let i=0; i < 9; i++) {
		resp.push((<Quad key={i} index={i}/>))
	}
	return resp
}

const App = () => {


return (
	<div className="main-game">
		{ getQuads() }
	</div>
);
};

export default App;
