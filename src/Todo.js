import './Todo.css';
import React from 'react';
 
class Todo extends React.Component {
	constructor(props) {
		super(props);
		// console.log('props', props);
		// this.state = { id: props.id, value: props.value, done: props.done };
		this.state = { data: props.data };
	}

	static getDerivedStateFromProps(props, state) {
		// console.log('getDerivedStateFromProps', props);
		return { data: props.data };
	}

	completeTask = () => {
	 	 console.log('Todo completeTask', this.props.id);
	 	 this.setState({ done: true });
	 	this.props.completeTask(this.state.data.id);
	 };

	render() {
		// console.log('render');
		let checkDone = '';
		if (!this.state.data.checkDone) {
			checkDone = (
				<input
					type='checkbox'
					width='50'
					style={{ cursor: 'pointer' }}
					title='Bấm để hoàn thành task'
					onChange={() => this.props.completeTask(this.state.data.id)}
				/>
			);
		}
		return (
			<div className='todo aligned'>
				
				{checkDone}
				<span className={this.state.data.done ? 'done' : ''}>
					{this.state.data.name}
				</span>
				<img
					className={this.state.data.done ? 'noCheckDone' : ''}
					src={
						process.env.PUBLIC_URL +
						'/assets/clear.png'
					}
					alt='clear'
					width='25'
					style={{ cursor: 'pointer' }}
					title='Bấm để xóa task'
					onClick={() => this.props.deleteTask(this.state.data.id)}
				/>
				&nbsp;&nbsp;
				<hr></hr>
			</div>
		);
	}
}

export default Todo;
