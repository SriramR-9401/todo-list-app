let item;
if (JSON.parse(localStorage.getItem("Todo"))) {
	item = JSON.parse(localStorage.getItem("Todo"));
} else {
	item = [];
}
const initialState = {
	todoItem: item,
};

const Todo = (state = initialState, action) => {
	switch (action.type) {
		case "ADD":
			let data = [...state.todoItem, action.payload];
			localStorage.setItem("Todo", JSON.stringify(data));
			return {
				todoItem: data,
			};

		case "REMOVE":
			let array = state.todoItem.filter(
				(element) => element !== action.payload
			);
			localStorage.setItem("Todo", JSON.stringify(array));
			return {
				todoItem: array,
			};
		default:
			return { ...state };
	}
};

export default Todo;
