import axios from 'axios';
import {useState, useEffect} from 'react';
import './TaskForm.css';

const TaskForm = () => {
	const [name, setName] = useState('');
	const [tasks, setTasks] = useState('');
	const [error, setError] = useState(null); 


	useEffect(() => {
		getTasks()
	}, [])

	const getTasks = async function() {
		try {
			const getTasks = await axios.get('/api/v1/tasks');
			const {tasks } = getTasks.data; 
			setTasks(tasks);
		} catch (error) {
			setError(error.message);
		}
	}

	const handleSubmit = async(event) => {
		event.preventDefault();
		axios.post('/api/v1/tasks', {name})
		getTasks();
		setName('');
	}
	return (
		<>
		{error && <p className='error'>{error}</p>}
		<section>
			<form onSubmit={handleSubmit} className='task-form'>
				<h2>Task Manager</h2>
				<input
					type='text'
					name='task-name'
					className='task-input'
					placeholder='e.g wash dishes'
					value={name}
					onChange={function (event) {
						setName(event.target.value);
					} } />
				<button type='submit' className='btn submit-btn'>Submit</button>
			</form>
		</section>
		<section>
		{tasks.length === 0 ? <p className='no-tasks'> No Tasks In Your List</p> : tasks.map(function (task) {
			return (
				<ul>
					<li key={task._id}>
						<p>{task.name}</p>
						<p>{task.completed}</p>
					</li>
				</ul>
			);
		}) }
		</section>
		</>
	)
}

export default TaskForm; 