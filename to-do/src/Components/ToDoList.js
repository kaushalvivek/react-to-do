import React from 'react';
import ToDoForm from './toDoForm';

export default class ToDoList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			todos: []
		};

		this.addTodo = this.addTodo.bind(this);
	}

	addTodo(todo) {
		// the '...' creates a copy
		this.setState({
			todos: [todo, ...this.state.todos]
		});
	}

	render() {
		return (
			<div >
				<ToDoForm onSubmit={this.addTodo} />
				{JSON.stringify(this.state.todos)}
			</div>
		);
	};
}