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