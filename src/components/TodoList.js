import React, { useState, useEffect } from "react";
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

	const [count, setCount] = useState(0);

	const addTodo = (text) => {
		console.log(todos.length);
		setTodos([...todos, { text, id: Math.random() }]);
	};

	// Will run if the [todos] data changes
	useEffect(() => {
		console.log("useEffect() - TODOs: ", todos);
	}, [todos]);

	useEffect(() => {
		console.log("useEffect() - count: ", count);
	}, [count]);

	return (
		<div>
			<ul>
				{todos.map((todo) => {
					return <li key={todo.id}>{todo.text}</li>;
				})}
			</ul>
			<AddNewTodo addTodo={addTodo} />
			<button onClick={() => setCount(count + 1)}>Score: {count}</button>
			{/* <button onClick={addTodo}>Add a Todo</button> */}
		</div>
	);
};

export default TodoList;
