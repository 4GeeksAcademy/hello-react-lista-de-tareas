import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const updateCounter = () => {
        return tasks.length;
    };

    return (
        <div className="container" style={{maxWidth: '400px', margin: '0 auto', padding: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', backgroundColor: '#ffffff'}}>
            <h1 className="text-center mt-5">ToDo List</h1>
            <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} placeholder="Enter new task..."/>
            <button onClick={addTask} className="btn btn-primary">Add Task</button>
            <ul className="list-group mt-3">
                {tasks.map((task, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {task}
                        <button onClick={() => removeTask(index)} className="btn btn-danger">x</button>
                    </li>
                ))}
            </ul>
            <p className="text-center mt-3">Total tasks: {updateCounter()}</p>
        </div>
    );
}

export default TodoList;