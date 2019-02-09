import { connect } from 'react-redux';
import Login from '../components/Login.jsx';

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

export default connect(
    mapStateToProps,
    null
)(Login);