import React, { useState, useEffect } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Person from '@material-ui/icons/Person'
import Typography from '@material-ui/core/Typography'
import auth from './../auth/auth-helper'
import { read, updateBasket } from '../user/api-user.js'



export default function Items(prop) {


    const [user, setUser] = useState({})
    var jwt = auth.isAuthenticated()


    if ( jwt !== null && jwt !== undefined && jwt !== false) {
        useEffect(() => {
            const abortController = new AbortController()
            const signal = abortController.signal

            read({
                userId: auth.isAuthenticated().user._id
            }, { t: jwt.token }, signal).then((data) => {
                if (data && data.error) {
                    console.log("User not logged in")
                } else {
                    setUser(data)
                }
            })


            return function cleanup() {
                abortController.abort()
            }


        }, [auth.isAuthenticated().user._id])

    }

    console.log(JSON.stringify(user))

    const updateItems = (user) => {
        

        updateBasket({
            userId: auth.isAuthenticated().user._id
        }, {
            t: jwt.token
        }, user).then((data) => {
            if (data && data.error) {
                setUser({ ...user, error: data.error })
            } else {
                setUser(user)
            }
        })

        window.location.reload()
    }





    const addItem = (item, user) => {

        if (user.basket !== null && user.basket !== undefined && user.basket !== NaN) {
            console.log("BASKET BEFORE " + JSON.stringify(user.basket))
            item.amount=1
            const index = (user.basket.filter(e => e.name === item.name).length>0);
            if (index === -1) {
                user.basket = user.basket.concat(item);
            }
            else {
                alert("Item already in basket")
            }
            updateItems(user)

        }
        else {
            alert("Adding to basket failed: need user to login")
        }
    }


    return (
        <List dense>
            {prop.items?.map((item) => {
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
                                <IconButton onClick={() => addItem(item, user)}>
                                    <Typography>Add to Basket</Typography>
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
