import React from 'react';
import ToDoForm from './toDoForm';
import Todo from './Todo';
import Button from '@material-ui/core/Button';

export default class ToDoList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			todos: [],
			toShow: 'all'
		};

		this.addTodo = this.addTodo.bind(this);
		this.clear = this.clear.bind(this);
		this.toggleComplete = this.toggleComplete.bind(this);
		this.changeToShow = this.changeToShow.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.removeAllComplete = this.removeAllComplete.bind(this);
	}

	addTodo(todo) {
		// the '...' creates a copy
		// state used as function, because update is asynchronous
		this.setState(state => ({
			todos: [todo, ...state.todos]
		}));
	}

	toggleComplete(id) {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					return {
						// to keep the contents of todo same
						...todo,
						complete: !todo.complete
					}
				}
				else {
					return todo;
				}
			})
		});
	}

	changeToShow(mode) {
		this.setState({
			toShow: mode
		})
	}

	onDelete(id) {
		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id)
		})
	}

	removeAllComplete() {
		this.setState({
			todos: this.state.todos.filter(todo => !todo.complete)
		})
	}

	clear() {
		this.setState({
			todos: [],
			toShow: 'all'
		})
	}

	render() {

		let todos = [];
		if (this.state.toShow === 'all') {
			todos = this.state.todos;
		}
		else if (this.state.toShow === 'active') {
			todos = this.state.todos.filter(todo => !todo.complete);
		}
		else {
			todos = this.state.todos.filter(todo => todo.complete);
		}

		return (
			<div >
				<ToDoForm onSubmit={this.addTodo} />
				{todos.map(todo =>
					<Todo
						key={todo.id}
						todo={todo}
						toggleComplete={() => this.toggleComplete(todo.id)}
						onDelete={() => this.onDelete(todo.id)} />
				)}

				<div>
					Todos left : {this.state.todos.filter(todo => !todo.complete).length}
				</div>
				<div>
					<Button color='primary' onClick={() => this.changeToShow('all')}>All</Button>
					<Button color='primary' onClick={() => this.changeToShow('active')}>Active</Button>
					<Button color='primary' onClick={() => this.changeToShow('complete')}>Complete</Button>
				</div>
				<div>
					{this.state.todos.some(todo => todo.complete) ?
						<Button color='secondary' onClick={() => this.removeAllComplete()}>Remove All Complete Todos</Button> : null}
				</div>
				<div>
					<Button variant = 'contained' color='secondary' onClick={() => this.clear()}> Clear All Entries </Button>
				</div>
			</div>

		);
	};
}