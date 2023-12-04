import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [hoverIndex, setHoverIndex] = useState(null);

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

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    const isTaskEmpty = tasks.length === 0; 

    return (
        <div className="container" style={{maxWidth: '400px', margin: '0 auto', boxShadow: '0 4px 6px rgba(45, 0, 9, 3)', borderRadius: '25px', backgroundColor: '#ffe4c4'}}>
            <h1 className="text-center mt-5">ToDo List</h1>
            <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} placeholder="Que hay pa hoy...?"/>
            <button onClick={addTask} className="justify-content-end btn btn-primary">Add Task</button>
            <ul className="list-group mt-3">
                {tasks.map((task, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center py-2" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                        {task}
                        <button onClick={() => removeTask(index)} className="btn bg-dark-subtle py-0" style={{display: hoverIndex === index ? 'block' : 'none'}}>x</button>
                    </li>
                ))}
            </ul>
            <p className="text-center mt-3">Total tasks: {updateCounter()}</p>
            {isTaskEmpty && <p className="text-center">No hay tareas, añadir tareas</p>}
        </div>
    );
}

export default TodoList;