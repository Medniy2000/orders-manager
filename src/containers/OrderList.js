import React from 'react'
import { connect } from 'react-redux'
import Order from '../components/Order.jsx'

import {map} from 'lodash/collection'

function OrderList({orders}) {
    return (
        map(orders, (order) => {
            return (
                <Order order={ order } key={ order.id } />
            )
        })
    )
}

const mapStateToProps = state => {
    return {
        orders: state.orders
    }
}


export default connect(
    mapStateToProps,
    null
)(OrderList)