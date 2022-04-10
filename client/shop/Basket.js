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
//import { read } from './api-user.js'
//import { listBasket, updateBasket } from '../user/api-user'


// const useStyles = makeStyles(theme => ({
//     root: theme.mixins.gutters({
//         maxWidth: 600,
//         margin: 'auto',
//         padding: theme.spacing(3),
//         marginTop: theme.spacing(5)
//     }),
//     title: {
//         marginTop: theme.spacing(3),
//         color: theme.palette.protectedTitle
//     }
// }))



export default function Basket(prop) {
    var total = 0;


    console.log("USER DATA: " + JSON.stringify(prop.user))

    console.log("Basket Data: " + JSON.stringify(prop.basket))



    const addasd = (updateItems, item, user) => {
        //add 1 to amount of the current ite and update the basket
        if (done) { //used to make sure only one update function is running
            done = false
            console.log("ADDING AMOUNT " + item.amount)
            item.amount++
            console.log(item.amount)
            updateItems(item, user)
            done = true
        }
    }

    const addOne = (item) => {
        item.amount++

    }
    const removeOne = (item) => {
        1 < item.amount ? item.amount-- : 1
    }

    const removeEntireItem = (updateItems, item, user) => {
        //if after removing 1 the item amount will be more than 0 remove 1, else remove the item
        
        const index = user.basket.indexOf(item);
        if (index > -1) {
            user.basket.splice(index, 1);
        }

        updateItems(user)
    }
    const update = (updateItems, user) => {
        updateItems(user)
    }


    return (

        <List dense>

            {prop.user.basket?.map((item, i) => {


                if (item.amount !== 0) {
                    total += item.price * item.amount
                    console.log("LOADING ITEM " + i);
                    console.log(JSON.stringify(item));
                    return (

                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Person />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText id="basket" primary={item.name} secondary={"£" + item.price + " x " + item.amount + " = " + item.price * item.amount} />

                            <ListItemSecondaryAction>

                                <Link to={"/user/" + auth.isAuthenticated().user._id}>
                                    <IconButton onClick={() => addOne(item)}>
                                        <Typography>+</Typography>
                                    </IconButton>

                                    <Typography>{item.amount}</Typography>

                                    <IconButton onClick={() => removeOne(item)}>
                                        <Typography>-</Typography>
                                    </IconButton>

                                    <IconButton onClick={() => removeEntireItem(prop.updateBasket, item, prop.user)}>
                                        <Typography>Remove</Typography>
                                    </IconButton>
                                </Link>

                            </ListItemSecondaryAction>

                        </ListItem>
                    )
                }
            })
            }


            Total: £{total}
            <IconButton onClick={() => update(prop.updateItems, prop.user)}>
                <Typography>Save Basket</Typography>
            </IconButton>

            <Divider />
            <IconButton onClick={() => update(prop.updateItems, prop.user)}>
                <Typography>Buy</Typography>
            </IconButton>
        </List>

    )
}

//onChange={handleChange} name="basket" value={item} 

// function handleChange(event) {
//     const { name, value } = event.target;

//     setBasket(oldBasket => {
//         return {
//             ...oldBasket,
//             [name]: value
//         }
//     })
// }


