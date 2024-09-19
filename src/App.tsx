import React, { useState } from 'react';
import Task from './components/Task';
import AddTaskForm from './components/AddTaskForm';

interface TaskType {
    id: string;
    text: string;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<TaskType[]>([
        { id: '1726733431930', text: 'Plan a vacation you have always wanted to take' },
        { id: '1726733431931', text: 'Fill out a basketball bracket' },
        { id: '1726733431932', text: 'Create and follow a savings plan ' },
    ]);

    const addTask = (text: string) => {
        const newTask: TaskType = {
            id: Date.now().toString(),
            text,
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="app">
            <h1>To do list</h1>
            <AddTaskForm onAdd={addTask} />
            <div className="task-list">
                {tasks.map(task => (
                    <Task key={task.id} id={task.id} text={task.text} onDelete={deleteTask} />
                ))}
            </div>
        </div>
    );
};

export default App;
