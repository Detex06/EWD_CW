import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Person from '@material-ui/icons/Person'
import { Button } from 'bootstrap'

const Items = (prop) => {

    return (
        <List dense>
            {prop.items.map((item) => {
                console.log("LOADING ITEMS");
                console.log(JSON.stringify(item));
                if (item.amount !== 0) {
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
                                    <Button onClick={() => 
                                    {
                                        prop.basketAdd(item)
                                    }}>Add To basket</Button>
                                </IconButton>
                            </ListItemSecondaryAction>


                        </ListItem>

                    )
                }
            })
            }
        </List>
    )
}

onAdd

export default Items;