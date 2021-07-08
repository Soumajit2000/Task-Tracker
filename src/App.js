import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

const App = () => {
	const [showAddtask, setShowAddtask] = useState(false)
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Doctors Appoitment",
			day: "Feb 5th at 2:30pm",
			reminder: true,
		},
		{
			id: 2,
			text: "Meeting at School",
			day: "Feb 6th at 1:30pm",
			reminder: true,
		},
		{
			id: 3,
			text: "Food Shoppingt",
			day: "Feb 7th at 2:30pm",
			reminder: false,
		},
	]);

	//Add Tasks
	const addTask = (task) => {
		 const id = Math.floor(Math.random()*10000) + 1
		 const newTask = {id, ...task}
		 setTasks([...tasks, newTask])
	};

	//Delete tasks
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	//Toggle reminder
	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};
	return (
		<div className="container">
			<Header onAdd={()=> setShowAddtask(!showAddtask)} showAdd = {showAddtask}/>
			{showAddtask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				<h4>No tasks Added</h4>
			)}
		</div>
	);
};

export default App;
