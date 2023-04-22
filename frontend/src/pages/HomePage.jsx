import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/tasks');
	}
	return (
		<main>
		    <h1>Welcome to the task manager app </h1>
			<button className='btn submit-btn' onClick={handleClick}> Go to tasks</button>
		</main>
	)
}

export default HomePage; 