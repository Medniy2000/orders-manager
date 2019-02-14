import { connect } from 'react-redux'
import Login from '../components/Login.jsx'
import Notification from "../components/Notification"

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showNotification: (notification) => {
            return dispatch(Notification(notification))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)