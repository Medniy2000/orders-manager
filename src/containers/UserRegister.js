import { connect } from 'react-redux'
import {createUser} from '../actions'
import Register from '../components/Register.jsx'
import Notification from "../components/Notification.js"


const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreate: user => {
            let created = dispatch(createUser(user))
            return created.payload
        },

        showNotification: (notification) => {
            return dispatch(Notification(notification))

        }

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)