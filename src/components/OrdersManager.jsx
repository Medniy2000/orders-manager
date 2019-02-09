import React from'react';
import {SemanticToastContainer} from "react-semantic-toasts";

import Navigation from './layout/Navigation.jsx';
import Container from './layout/Container.jsx';
import Content from './layout/Content.jsx';
import Footer from './layout/Footer.jsx';


import OrderList from '../containers/OrderList.js';
import Waiter from '../containers/Waiter.js';


export default ({orders}) =>{

    function profit(orders){
        let profit = 0;
        orders.forEach(order => {
            let order_profit = 0;
            order.dishes.forEach(dish => {
                order_profit += dish.items_count * dish.price_per_item;
            });
            profit += order_profit;
        });
        return profit;
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
                                <th>#</th>
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
