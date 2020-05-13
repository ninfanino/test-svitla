import { connect } from 'react-redux';
import { toggleTask } from '../redux/actions';
import TaskComponent from '../components/TaskComponent';

// Esto es un container component, solo tiene la logica para conectarse a redux
// Los coloco separado para encontrar más rapido los de logica contra los que me regresan JSX

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = dispatch => ({
    toggleTask: id => dispatch(toggleTask(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskComponent);