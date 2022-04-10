import React, { useState } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Button from '@material-ui/core/Button'
import Person from '@material-ui/icons/Person'
import Typography from '@material-ui/core/Typography'
import Basket from '../shop/Basket'



export default function Items(prop) {

    const addItem = (updateItems, item, user) => {


        console.log("BASKET BEFORE " + JSON.stringify(user.basket))
        const index = user.basket.indexOf(item);
        if (index === -1) {
            user.basket = user.basket.concat(item);
        }
        console.log("BASKET AFTER " + JSON.stringify(user.basket))
        updateItems(user)
    }

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
                            <ListItemSecondaryAction> {
                                auth.isAuthenticated().user && auth.isAuthenticated().user._id == user._id &&
                                (
                                    <IconButton onClick={() => addItem(prop.updateBasket, item, prop.user)}>
                                        <Typography>Add to Basket</Typography>
                                    </IconButton>)
                            }
                            </ListItemSecondaryAction>


                        </ListItem>

                    )
                }
            })
            }
        </List>
    )
}


