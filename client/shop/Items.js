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
import Basket from '../shop/Basket'
import auth from './../auth/auth-helper'
import { Redirect, Link } from 'react-router-dom'
import { read, updateBasket } from '../user/api-user.js'



export default function Items(prop) {


    const [user, setUser] = useState({})
    //const [setdirectToSignin, setRedirectToSignin] = useState(false)
    const jwt = auth.isAuthenticated()

    console.log("!!!!!!!!!")
    console.log(jwt)
    console.log(jwt.token)

    if ( auth.isAuthenticated().user._id!=undefined|| jwt!=null || jwt!=undefined || jwt!=false) {
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
        console.log("UPDATING BASKET")
        console.log("USER DATA IN UPDATE: " + JSON.stringify(user))

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
    }



// if (setdirectToSignin) {
//     return (<Redirect to={'/user/' + user.userId} />)
// }



const addItem = (item, user) => {

    if (user != null || user != undefined || user != NaN) {
        console.log("BASKET BEFORE " + JSON.stringify(user.basket))
        const index = user.basket.indexOf(item);
        if (index === -1) {
            user.basket = user.basket.concat(item);
        }
        console.log("BASKET AFTER " + JSON.stringify(user.basket))
        updateItems(user)

    }
    else {
        alert("Adding to basket failed: need user to login")
    }
}

console.log("CHECKING USER DATA LOADED " + JSON.stringify(user))

console.log("CHECKING ITEMS LOADED " + JSON.stringify(prop.items))

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
