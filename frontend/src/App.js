import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import EditTask from './components/EditTask/EditTask';
import TaskForm from './components/TaskForm/TaskForm';

function App() {
  return (
    <div className="App">
	<header className="App-header"></header>
	  <Router> 
		<Routes>
	    <Route exact path = '/' element={<HomePage/>}></Route>
		<Route exact path ="/tasks" element={<TaskForm/>}></Route>
		<Route exact path= 'tasks/task/:id' element={<EditTask/>}></Route>
		<Route path='/*' element={<NotFound/>}></Route>
		</Routes>
	  </Router>
    </div>
  );
}

export default App;
