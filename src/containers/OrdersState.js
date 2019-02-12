import { connect } from 'react-redux'
import OrdersManager from '../components/OrdersManager.jsx'

const mapStateToProps = state => {
    return {
        orders: state.orders
    }
}

export default connect(
    mapStateToProps,
    null
)(OrdersManager)