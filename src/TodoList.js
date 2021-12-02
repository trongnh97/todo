import './TodoList.css';
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoListName: props.name,
			taskName: '',
			tasks: [],
		};
	}

	myTaskChangeHandler = (event) => {
		this.setState({ taskName: event.target.value });
		// console.log('myTaskChangeHandler', event.target.value);
	};

	addTask = () => {
		// console.log('addTask', this.state.taskName);
		if (this.state.tasks === []) {
			return;
		}
		const id = this.state.tasks.length;
		const name = this.state.taskName;
		this.state.tasks.push({ id, name, done: false });
		this.setState({ taskName: '' });
	};

	deleteTask = (id) => {
		// console.log('list', this.state.tasks);
		// console.log('deleteTask', id);
		const tasks = this.state.tasks.filter((task) => task.id !== id);
		// console.log('sau khi xóa', tasks);
		this.setState({ tasks });
	};

	completeTask = (id) => {
		// console.log('list', this.state.tasks);
		// console.log('completeTask', id);
		const tasks = this.state.tasks;
		
		tasks.forEach((task) => {
			if (task.id === id) {
				task.done = !task.done;
			}
		});

		// console.log('tasks', tasks);
		this.setState({ tasks });
		
	};


	render() {
		return (
			<div className='todoList'>
				{this.state.todoListName}
				<br />
				<div className='aligned'>
					<img className="add-img"
						src={
							process.env.PUBLIC_URL +
							'/assets/add-file.png'
						}
						alt='Add Task'
						width='25'
						style={{ cursor: 'pointer' }}
						title='Bấm để thêm task'
						onClick={() => this.addTask()}
					/>
					<input className="fill"
						type='text'
						placeholder="New work"
						value={this.state.taskName}
						onChange={this.myTaskChangeHandler}
					/>
				</div>
				<ul style={{ paddingLeft: '10px' }}>
					{this.state.tasks.map((value, index) => {
						return (
							<Todo
								key={value.id}
								data={value}
								deleteTask={this.deleteTask}
								completeTask={this.completeTask}
							/>
						);
					})}
				</ul>
				<p className="totalTasks">{this.state.tasks.length} works</p>
			</div>
		);
	}
}

export default TodoList;
