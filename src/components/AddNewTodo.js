import React, { useState } from "react";

const AddNewTodo = ({addTodo}) => {
	const [todos, setTodos] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
        addTodo(todos)
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="todo">Add New To do: </label>
			<input
				type="text"
				value={todos}
				id="todo"
				onChange={(e) => setTodos(e.target.value)}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default AddNewTodo;
