import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions';

//Este es un componente muy pequeño, y no recibe nada del state, por lo que no tenía caso separarlo
//Si el componente creciera podría considerar separarse en container y presentational
const FormTask = ({dispatch}) => {
    //Esta variable va a guardar el texto que coloco en el input
    let input;
    const submitTask = (e) => {
        //No necesito que la página se rerenderea al hacer submit por lo que cancelo el comportamiento default
        e.preventDefault(e);
        if(!input.value){ return }

        dispatch(addTask(input.value));
        input.value = '';
    }
    // uso un ref para saber el input con el que estoy interactuando y le asigno su valor a una variable
    return(
        <form onSubmit={submitTask}>
            <input type="text" placeholder="Write a task" ref={node => { input = node}} />
            <button submit>Add Task</button>
        </form>
    )
}

export default connect()(FormTask);