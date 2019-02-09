import React from 'react';
import { connect } from 'react-redux';
import Order from '../components/Order.jsx';

function OrderList({orders}) {
    return (
        orders.map(order => {
            return (
                <Order order={ order } key={ order.id } />
            );
        })
    );
}

const mapStateToProps = state => {
    return {
        orders: state.orders
    };
};


export default connect(
    mapStateToProps,
    null
)(OrderList);