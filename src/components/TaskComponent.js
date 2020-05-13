import React from 'react';

const TaskComponent = ({tasks, toggleTask}) => {
    // Coloco la funcion onClick fuera del boton para evitar que se cree una referencia nueva en memoria cada que hago un click
    const completeTask = (e) => {
        const idTask = e.target.getAttribute('data-id');
        // El getAttribute me devuelve un string y yo necesito un numero, asi que hago una coercion explicita y lo mando a la funcion
        toggleTask(Number(idTask));
    }
    return (
        <div>
        {
        tasks.map((task) => {
            // valida si la tarea esta completada
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