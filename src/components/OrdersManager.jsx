import React from'react'
import {SemanticToastContainer} from "react-semantic-toasts"
import {reduce} from 'lodash/collection'

import Navigation from './layout/Navigation.jsx'
import Container from './layout/Container.jsx'
import Content from './layout/Content.jsx'
import Footer from './layout/Footer.jsx'


import OrderList from '../containers/OrderList.js'
import Waiter from '../containers/Waiter.js'


export default ({orders}) =>{

    function profit(orders){
        return reduce(orders, function(profit, order) {
            return profit + reduce(order.dishes, function (order_profit, dish) {
                return order_profit + dish.items_count * dish.price_per_item
            }, 0)
        }, 0)
    }

    return (
        <div key="orders-manager">
            <Container>
                <Navigation/>
                <Content>
                    <div key="orders">
                        <h1>#ORDERS</h1>
                        <SemanticToastContainer position="top-right" />
                        <table className="ui selectable inverted table">
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Client</th>
                                <th>Dishes</th>
                                <th>Total Price</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                                <OrderList />
                            </tbody>
                            <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Profit: {profit(orders)}</th>
                                <th>
                                    <Waiter
                                        primary
                                        btn_name="New Order"
                                        header="create Order #"
                                        order={{id: null, client:'', dishes:[]}}
                                        open={false}
                                    />
                                </th>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </Content>
                <Footer/>
            </Container>
        </div>
    )
}
