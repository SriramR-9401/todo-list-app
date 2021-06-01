let item;
if (JSON.parse(localStorage.getItem("Completed"))) {
	item = JSON.parse(localStorage.getItem("Completed"));
} else {
	item = [];
}
const initialState = {
	items: item,
};

const Complete = (state = initialState, action) => {
	switch (action.type) {
		case "IMPORT":
			let data = [...state.items, action.payload];
			localStorage.setItem("Completed", JSON.stringify(data));
			return {
				items: data,
			};
		case "REMOVES":
			let arr = state.items.filter((element) => element !== action.payload);
			localStorage.setItem("Completed", JSON.stringify(arr));
			return {
				items: arr,
			};
		default:
			return { ...state };
	}
};

export default Complete;
