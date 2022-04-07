import React from 'react'

export default function Item(prop) {
    
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <Person />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={prop.name} secondary={"£" + prop.price} />
            <ListItemSecondaryAction>
                <IconButton>
                    <ArrowForward />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}