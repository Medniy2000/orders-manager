import React from 'react'
import Dish from './Dish.jsx'
import {map} from 'lodash/collection'

export default ({dishes}) => {
    return (
        <ul>
            {
                map(dishes, (dish) => {
                    return (
                        <Dish dish={dish} key={dish.id}/>
                    )
                })
            }
        </ul>
    )
}