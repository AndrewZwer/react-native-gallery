const initialState = {
	pictures: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_PICTURES_REQUEST":
			return {
				pictures: action.payload,
			};
			
		default:
			return state;
	}
	return state;
}

export default reducer;

