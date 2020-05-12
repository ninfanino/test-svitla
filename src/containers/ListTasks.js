import { connect } from 'react-redux';
import { toggleTask } from '../redux/actions';
import TaskComponent from '../components/TaskComponent';

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = dispatch => ({
    toggleTask: id => dispatch(toggleTask(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskComponent);