import './Task.css';
import {FaEdit, FaTrash} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

const Task = ({id, name, completed, handleDelete}) => {

	const toUpperCase = (string) => {
		return string.split(/(\s+)/).map(word => word[0].toUpperCase() + word.slice(1)).join('')
	}
	const navigate = useNavigate();

	const handleClicked = () => {
		handleDelete(id)
	}

	const handleEdit = () => {
		navigate(`task/${id}`)
	}

	return (
		<div className='task'>
			<li >
				<p>{toUpperCase(name)}</p>
				<p>{completed}</p>
			</li>
			<FaTrash className='trash' onClick={handleClicked}/>
			<FaEdit className='edit' onClick={handleEdit}/>
		</div>
	)
}

export default Task; 