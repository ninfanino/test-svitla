import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import tasks from './tasks';

export const reducers = combineReducers({
    tasks
})

export const epics = combineEpics()