import React from 'react'

export default function Item(item) {
    const { item } = item;
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