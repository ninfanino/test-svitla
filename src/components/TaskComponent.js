import React from 'react';

const TaskComponent = ({tasks, toggleTask}) => {
    const completeTask = (e) => {
        const idTask = e.target.getAttribute('data-id');
        toggleTask(Number(idTask));
    }
    return (
        <div>
        {
        tasks.map((task) => {
            
            if(task.completed === false) {
            return (
                <div>
                    {task.task} 
                    <button data-id={task.id} onClick={completeTask}>Check</button>
                </div>
            )
            } 
        
        })
        }
        </div>

    )
}

export default TaskComponent;