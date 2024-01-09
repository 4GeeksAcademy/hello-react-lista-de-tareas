import React, { useState, useEffect } from 'react';


function TodoList() {

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [hoverIndex, setHoverIndex] = useState(null);

    const addTask = () => { //agregar una nueva tarea 
        if (newTask !== '') {
            let nuevoAr = task.concat({ "done": false, "label": newTask })
            setTask(nuevoAr);
            setNewTask('');
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addTask();
            event.preventDefault();
        }
    };

    const removeTask = (index) => {
        setTask(task.filter((_, i) => i !== index));
    };

    const updateCounter = () => {
        return task.length;
    };

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    const isTaskEmpty = task.length === 0;


    return (
        <div className="container d-flex position-absolute top-50 start-50 translate-middle flex-column col-4 my-3 mx-auto shadow-lg p-3 mb-5 bg-secondary rounded-4 " >
            <h1 className="text-center mt-4">ToDo List</h1>

            <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} onKeyDown={handleKeyDown} placeholder="Que hay pa hoy...?" />
            <button onClick={addTask} className="justify-content-end btn btn-primary mt-1">Agregalo ▼</button>
            <ul className="list-group mt-3">
                {task.map((items, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center py-2" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                        {items.label}
                        <button onClick={() => removeTask(index)} className="btn bg-dark-subtle p-0" style={{ display: hoverIndex === index ? 'block' : 'none' }}>x</button>
                    </li>
                ))}
            </ul>
            <p className="text-center mt-3">Total tareas: {updateCounter()}</p>
            {isTaskEmpty && <p className="text-center">No hay tareas, añadir tareas</p>}
        </div>
    );
};

export default TodoList;

