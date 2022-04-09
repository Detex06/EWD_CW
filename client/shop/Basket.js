import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Edit from '@material-ui/icons/Edit'
import Person from '@material-ui/icons/Person'
import Divider from '@material-ui/core/Divider'
import DeleteUser from '../user/DeleteUser'
import auth from './../auth/auth-helper'
import Items from '../shop/Items'
import { listItems } from '../shop/api-item.js'
import { updateBasket } from '../user/api-user'
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
    

    console.log("LOADING BASKET");
    console.log(JSON.stringify(prop.user))

    console.log( JSON.stringify(prop.basket) )

    const addAndUpdate = (updateItems,item) => {
        //add 1 to amount of the current ite and update the basket
        console.log("ADDING AMOUNT "+item.amount)
        item.amount++
        console.log(item.amount)
        updateItems(item)
    }

    const removeAndUpdate = (updateItems,removeItem, item) => {
        //if after removing 1 the item amount will be more than 0 remove 1, else remove the item
        if(item-- > 0) {
            console.log("REMOVING AMOUNT "+item.amount)
            item.amount--
            console.log(item.amount)
            updateItems(item)
        }
        else {
            removeItem(item)
        }
    }

    return (
        
        <List dense>
            
            {prop.basket?.map((item,i) => {

                
                if (item.amount !== 0) {
                    total+=item.price*item.amount
                    console.log("LOADING ITEM "+i);
                    console.log(JSON.stringify(item));
                    return (

                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Person />
                                </Avatar>
                            </ListItemAvatar> 
                            <ListItemText primary={item.name} secondary={"£" + item.price + " x " + item.amount} />

                            <ListItemSecondaryAction>
                                <IconButton onClick={addAndUpdate(prop.updateItems,item)}>
                                    <Typography>+</Typography>
                                </IconButton>
                                <IconButton onClick={removeAndUpdate(prop.updateItems,prop.removeItem,item)}>
                                    <Typography>-</Typography>
                                </IconButton>
                            </ListItemSecondaryAction>

                        </ListItem>
                    )
                }
            })
            }
            Total: £{total}
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

const basketAdd = (item) => {

    // console.log("ADD!!!!!!! " + JSON.stringify(item))

    // const user = {
    //     basket: item
    // }
    // updateBasket({
    //     userId: match.params.userId
    // }, {
    //     t: jwt.token
    // }, user).then((data) => {
    //     if (data && data.error) {
    //         setBasket({ ...user, error: data.error })
    //     } else {
    //         setBasket({ ...user, basket: data.basket })
    //     }
    // })


}

function basketRemove(item) {

}