import React, { useState } from 'react';

interface AddTaskFormProps {
    onAdd: (text: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
    const [currentTask, setCurrentTask] = useState('');

    const addNewTask = () => {
        if (currentTask.trim()) {
            onAdd(currentTask);
            setCurrentTask('');
        }
    };

    return (
        <div className="add-task-form">
            <input
                type="text"
                value={currentTask}
                onChange={(e) => setCurrentTask(e.target.value)}
                placeholder="Enter task"
            />
            <button onClick={addNewTask} type={"submit"} className='btn add-btn'></button>
        </div>
    );
};

export default AddTaskForm;
