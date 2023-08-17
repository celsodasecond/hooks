import React, { useState } from "react";
import AddNewTodo from "./AddNewTodo";

const TodoList = () => {
	const [todos, setTodos] = useState([
		{
			text: "Pay Bills",
			id: 1,
		},
		{
			text: "Do Your Homework",
			id: 2,
		},
		{
			text: "Feed the Dog",
			id: 3,
		},
		{
			text: "Feed Ariane",
			id: 4,
		},
	]);

	const addTodo = (text) => {
		console.log(todos.length);
		setTodos([...todos, { text, id: Math.random() }]);
	};

	return (
		<div>
			<ul>
				{todos.map((todo) => {
					return <li key={todo.id}>{todo.text}</li>;
				})}
			</ul>
			<AddNewTodo addTodo={addTodo} />
			{/* <button onClick={addTodo}>Add a Todo</button> */}
		</div>
	);
};

export default TodoList;
