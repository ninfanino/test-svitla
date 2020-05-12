import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions';

const FormTask = ({dispatch}) => {
    let input;
    const submitTask = (e) => {
        e.preventDefault(e);
        if(!input.value){ return }

        dispatch(addTask(input.value));
        input.value = '';
    }
    return(
        <form onSubmit={submitTask}>
            <input type="text" placeholder="Write a task" ref={node => { input = node}} />
            <button submit>Add Task</button>
        </form>
    )
}

export default connect()(FormTask);