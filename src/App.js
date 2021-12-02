import './App.css';
import React from 'react';
import TodoList from './TodoList';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { taskName: '', tasks: [], };
	}

	render() {

		const date = new Date();
		const day = date.getDate()
		const month = date.getMonth() + 1
		const year = date.getFullYear()
		const today = day + '-' + month + '-' + year

		return (
			<div className='App'>
				<div className="title">
					<img src='/assets/left-arrow.png' alt="" />
					<img src='/assets/right-arrow.png' alt="" />
					<p>{today}</p>
				</div>

				<div className="content">
					<h3>Today's work</h3>
					<TodoList />
				</div>

			</div>
		);
	}
}

export default App;
