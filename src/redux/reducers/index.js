import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import tasks from './tasks';

export const reducers = combineReducers({
    tasks
})

// Las Epics eran necesarias para hacer funcionar el middleware, en este caso no se estan utilizando
export const epics = combineEpics()