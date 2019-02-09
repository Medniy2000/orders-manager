import React from 'react';
import DishList from './DishList.jsx'
import Waiter from '../containers/Waiter.js'


export default ({ order: {id, client, dishes}}) => {
    function totalPrice(dishes){
        let total_price = 0;
        dishes.forEach((dish) => {
            total_price += dish.price_per_item * dish.items_count;
        });
        return total_price;
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{client}</td>
            <td><DishList dishes={dishes}/></td>
            <td>{totalPrice(dishes)}</td>
            <td>
                <Waiter negative
                            btn_name="Change"
                            btn_class="positive"
                            header="Change Order #"
                            order={{id, client, dishes}}
                            open={false}
                />
            </td>
        </tr>
    );
};