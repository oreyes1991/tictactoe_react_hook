export const generalActions = (props) => {
	return {
		setQuadValue: (index, turn) => {
			props.dispatch({ type: 'SET_QUAD_VALUE', index, turn })
		}
	}
}

function externSetValue(props,data) {
  props.dispatch({ type: "SET_VALUE", data});
}
