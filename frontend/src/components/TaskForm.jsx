import axios from 'axios';
import {useState, useEffect} from 'react';

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
			setError(error);
		}
	}

	const handleSubmit = async(event) => {
		event.preventDefault();
		axios.post('/api/v1/tasks', {name})
		getTasks();
	}
	return (
		<>
		<section>
			<form onSubmit={handleSubmit}>
				<h4>Task Manager</h4>
				<input
					type='text'
					name='task-name'
					className='task-input'
					placeholder='e.g wash dishes'
					onChange={function (event) {
						setName(event.target.value);
					} } />
				<button type='submit' className='btn submit-btn'>Submit</button>
			</form>
		</section>
		<section>
		{error && <p>{error}</p>}
		{tasks.length === 0 ? <p> No tasks in your list</p> : tasks.map(function (task) {
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