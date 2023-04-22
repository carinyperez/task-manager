import './EditTask.css'
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios'; 
import {useState, useEffect} from 'react';

const EditTask = () => {
	const [name, setName] = useState('');
	const [completed, setCompleted] = useState('');
	const [error, setError] = useState('');
	const {id} = useParams();
	const navigate = useNavigate()

	useEffect(() => {
		getTask()
	}, [])

	const getTask = async() => {
		try {
			const {data} = await axios.get(`/api/v1/tasks/${id}`);
			const {name, completed} = data.task; 
			setName(name);
			if(completed) {
				setCompleted('true');
			} 
			
		} catch (error) {
			setError(`error, please try again`)
			setTimeout(function() {
				setError('')
			}, 1000)
		}
	}

	const editTask = async() => {
		try {
			await axios.patch(`/api/v1/tasks/${id}`, {name, completed})
		} catch (error) {
			setError(`error, please try again`)
			setTimeout(function() {
				setError('')
			}, 1000)
			
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		editTask();
	}

	const handleClick = () => {
		navigate('/tasks')
	}
	return (
		<>
		<section>
		<form onSubmit={handleSubmit}>
			<h1>Edit Task</h1>
			<section>
				<label>Task ID</label>
				<p>{id}</p>
			</section>
			<section>
			<label for='name'>Name</label>
			<input type='text' name='name' value={name} onChange={function(event) {
				setName(event.target.value)
			}}/>
			</section>
			<section>
			<label for='completed'>Completed</label>
			<input type='checkbox' name='completed' checked={completed} onChange={function(event){
				setCompleted(event.target.checked)
			}}/>
			</section>
			<button type='submit'>Edit</button>
			{error && <p className='error'>{error}</p>}
		</form>
		</section>
		<section> 
			<button onClick={handleClick} className='back-to-tasks'>Back To Tasks</button>
		</section>
		</>
	)
}

export default EditTask; 