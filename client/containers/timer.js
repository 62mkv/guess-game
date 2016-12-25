import { connect } from 'react-redux';
import Timer from '../components/timer';
import { setDuration } from '../actions';

function mapStateToProps(state){
    return {
        duration: state.duration
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setDuration: (value) => { dispatch(setDuration(value)); }
    }
}

const VisibleTimer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer);

export default VisibleTimer;
