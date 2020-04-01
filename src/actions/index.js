const getPicturesRequest = (newPictures) => {
	return {
		type: "GET_PICTURES_REQUEST",
		payload: newPictures
	}
}

export {
	getPicturesRequest
};