import React, { useState, useEffect } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Person from '@material-ui/icons/Person'
import Divider from '@material-ui/core/Divider'
import auth from './../auth/auth-helper'
import { Link } from 'react-router-dom'
var itemsStock = require('./itemList.json');



export default function Basket(prop) {
    var total = 0;

    //add 1
    const addOne = (item) => {
        item.amount++

    }
    //removes 1 amount if the current amount is more than 1
    const removeOne = (item) => {
        1 < item.amount ? item.amount-- : 1
    }

    //removes entire item
    const removeEntireItem = (item, user) => {

        const index = user.basket.indexOf(item);
        if (index > -1) {
            user.basket.splice(index, 1);
        }
    }
    //updates user's basket
    const update = (updateItems, user) => {
        updateItems(user)
    }

    const buy = () => {
        alert("nothing will happen because there is no transaction window")
    }

    return (

        <List dense>

            {prop.user.basket?.map((item, i) => {


                if (item.amount !== 0) {
                    total += item.price * item.amount
                    return (

                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Person />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText id="basket" primary={item.name} secondary={"£" + item.price + " x " + item.amount + " = " + Math.round((item.price * item.amount) * 100) / 100} />

                            <ListItemSecondaryAction>

                                <Link to={"/user/" + auth.isAuthenticated().user._id}>
                                    <IconButton onClick={() => addOne(item)}>
                                        <Typography>+</Typography>
                                    </IconButton>
                                    <IconButton onClick={() => removeOne(item)}>
                                        <Typography>-</Typography>
                                    </IconButton>

                                    <IconButton onClick={() => removeEntireItem(item, prop.user)}>
                                        <Typography>Remove</Typography>
                                    </IconButton>
                                </Link>

                            </ListItemSecondaryAction>

                        </ListItem>

                    )
                }
            })
            }


            Total: £ {total != null || total != NaN ? Math.round(total * 100) / 100 : 0}
            <IconButton onClick={() => update(prop.updateItems, prop.user)}>
                <Typography>Save Changes</Typography>
            </IconButton>

            <Divider />
            <IconButton onClick={() => buy()}>
                <Typography>Buy</Typography>
            </IconButton>

        </List>

    )
}


