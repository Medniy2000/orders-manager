import { connect } from 'react-redux'
import {createOrder, deleteOrder, updateOrder} from '../actions'
import OrderModal from '../components/OrderModal.jsx'

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
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(OrderModal)