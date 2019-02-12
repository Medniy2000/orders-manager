import { connect } from 'react-redux'
import {createUser} from '../actions'
import Register from '../components/Register.jsx'


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

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)