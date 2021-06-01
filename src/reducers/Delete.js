const Delete = (value) => {
	return {
		type: "REMOVES",
		payload: value,
	};
};
export default Delete;
