import React from 'react'

export default function Item(item) {
    const {item} = item_list;
    return (
        <div>
            <h2>{item.name}</h2>
            <div>{item.price}</div>
            <div>
                <button>Add To Basket</button>
            </div>
        </div>
    )
}