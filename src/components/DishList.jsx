import React from 'react';
import Dish from './Dish.jsx'

export default ({dishes}) => {
    return (
        <ul>
            {
                dishes.map(dish => {
                    return (
                        <Dish dish={dish} key={dish.id}/>
                    );
                })
            }
        </ul>
    );
}