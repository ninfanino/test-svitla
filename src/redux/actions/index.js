// la capacidad de mostrar tareas depende de identificarlas, asi que al agregarlas les seteo un id incremental

let counter = 0;

export const addTask = task => ({
    type: 'ADD_TASK',
    id: counter++,
    task
})

export const toggleTask = id => ({
    type: 'TOGGLE_TASK',
    id
})