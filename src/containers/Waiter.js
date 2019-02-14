import { connect } from 'react-redux'
import {createOrder, deleteOrder, updateOrder} from '../actions'
import OrderModal from '../components/OrderModal.jsx'
import Notification from "../components/Notification"

const mapDispatchToProps = dispatch => {
    return {
        onCreate: order => {
            let created = dispatch(createOrder(order))
            return created.payload
        },
        onUpdate: order => {
            let updated = dispatch(updateOrder(order))
            return updated.payload
        },
        onDelete: id => {
            dispatch(deleteOrder(id))
        },
        showNotification: (notification) => {
            return dispatch(Notification(notification))

        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(OrderModal)