import './Task.css';
import {FaEdit, FaTrash} from 'react-icons/fa';

const Task = ({key, name, completed}) => {
	const toUpperCase = (string) => {
		return string.split(/(\s+)/).map(word => word[0].toUpperCase() + word.slice(1)).join('')
	}
	return (
		<div className='task'>
			<li key={key}>
				<p>{toUpperCase(name)}</p>
				<p>{completed}</p>
			</li>
			<FaEdit/>
			<FaTrash/>
		</div>
	)
}

export default Task; 