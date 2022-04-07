import React from 'react'

export default function Item(products) {
    const { item } = products;
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <Person />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={"£" + item.price} />
            <ListItemSecondaryAction>
                <IconButton>
                    <ArrowForward />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}