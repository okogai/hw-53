import React from 'react';

interface TaskProps {
    id: string;
    text: string;
    onDelete: (id: string) => void;
}

interface TaskProps {
    onClick?: (id: string) => void
}

const Task: React.FC<TaskProps> = ({id, text, onDelete}) => {
    return (
        <div className="task">
            <span>{text}</span>
            <button onClick={() => onDelete(id)} type='button' className='btn delete-btn'></button>
        </div>
    );
};

export default Task;