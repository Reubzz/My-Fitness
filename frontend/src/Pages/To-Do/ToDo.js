import React, { useState } from 'react';
import './ToDo.css';

function ToDo() {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState('');
	const [taskDate, setTaskDate] = useState('');

	// Adding new task
	const handleAddTask = () => {
		if (newTask && taskDate) {
			const task = {
				id: Date.now(),
				text: newTask,
				date: taskDate,
				completed: false,
				image: 'https://play-lh.googleusercontent.com/VPqK75BwKMtTDFF6UQS6E3GYdYqzvZfddDxoKRH-DSlXIcYLN_EeSy5OXKx0bhBTtLUU', // Example image URL, replace with fitness-related images
			};
			setTasks([...tasks, task]);
			setNewTask('');
			setTaskDate('');
		}
	};

	// Toggle task completion
	const toggleTaskCompletion = (taskId) => {
		setTasks(tasks.map(task =>
			task.id === taskId ? { ...task, completed: !task.completed } : task
		));
	};

	// Delete task
	const deleteTask = (taskId) => {
		setTasks(tasks.filter(task => task.id !== taskId));
	};

	// Get today's date
	const today = new Date().toISOString().split('T')[0];

	// Categorize tasks into "Today's" and "Upcoming" based on the date
	const todaysTasks = tasks.filter(task => task.date === today);
	const upcomingTasks = tasks.filter(task => task.date > today);

	return (
		<>
			<section id="banner-title-container">
				<div class="title">To-Do List</div>
				{/* <div class="sub-title"></div> */}
			</section>
			<div className="todo-container">
				<div className="input-section">
					<input
						type="text"
						value={newTask}
						onChange={(e) => setNewTask(e.target.value)}
						placeholder="Enter a new task"
					/>
					<input
						type="date"
						value={taskDate}
						onChange={(e) => setTaskDate(e.target.value)}
					/>
					<button onClick={handleAddTask}>Add Task</button>
				</div>

				<div className="task-category">
					<h2 className="todo-title">Today's Tasks</h2>
					<div className="task-list">
						{todaysTasks.length === 0 ? (
							<p>No tasks for today!</p>
						) : (
							todaysTasks.map(task => (
								<div key={task.id} className={`task ${task.completed ? 'completed' : 'incomplete'}`}>
									<div className="task-info">
										<img src={task.image} alt="Task" className="task-image" />
										<p>{task.text}</p>
									</div>
									<div className="task-actions">
										<button onClick={() => toggleTaskCompletion(task.id)}>
											{task.completed ? 'Mark Incomplete' : 'Mark Complete'}
										</button>
										<button onClick={() => deleteTask(task.id)}>Delete</button>
									</div>
								</div>
							))
						)}
					</div>

					<h2 className="todo-title">Upcoming Tasks</h2>
					<div className="task-list">
						{upcomingTasks.length === 0 ? (
							<p>No upcoming tasks!</p>
						) : (
							upcomingTasks.map(task => (
								<div key={task.id} className={`task ${task.completed ? 'completed' : 'incomplete'}`}>
									<div className="task-info">
										<img src={task.image} alt="Task" className="task-image" />
										<p>{task.text}</p>
									</div>
									<div className="task-actions">
										<button onClick={() => toggleTaskCompletion(task.id)}>
											{task.completed ? 'Mark Incomplete' : 'Mark Complete'}
										</button>
										<button onClick={() => deleteTask(task.id)}>Delete</button>
									</div>
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default ToDo;