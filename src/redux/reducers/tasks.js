const tasks = (state=[], action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    id: action.id,
                    task: action.task,
                    completed: false
                }
            ]
        case 'TOGGLE_TASK':
            return state.map(task => (
                task.id === action.id ? {... task, completed: true} : task
            ))
        default:
            return state
    }
}

export default tasks;