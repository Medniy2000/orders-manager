import React from 'react'
import {reduce} from 'lodash/collection'
import DishList from './DishList.jsx'
import Waiter from '../containers/Waiter.js'

export default ({ order: {id, created_at, client, dishes}}) => {

    function totalPrice(dishes){
        return reduce(dishes, function(profit, dish) {
                return profit +  dish.items_count * dish.price_per_item
            }, 0)
    }

    return (
        <tr>
            <td>{created_at}</td>
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
    )
}