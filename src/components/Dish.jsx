import React from 'react'


export default ({ dish: {id, name, price_per_item, items_count}}) => {
    return (
        <li>
        <div className="ui label">
            <span>{name} {items_count} x {price_per_item}</span>
        </div>
        </li>
    )
}