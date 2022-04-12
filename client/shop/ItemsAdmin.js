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
import { readAdmin } from '../user/api-user.js'



export default function Items(prop) {


    const [user, setUser] = useState({})
    var jwt = auth.isAuthenticated()


    if ( jwt !== null && jwt !== undefined && jwt !== false) {
        useEffect(() => {
            const abortController = new AbortController()
            const signal = abortController.signal

            readAdmin({
                userId: auth.isAuthenticated().user._id
            }, { t: jwt.token }, signal).then((data) => {
                if (data && data.error) {
                    console.log("Admin user not logged in")
                } else {
                    setUser(data)
                }
            })


            return function cleanup() {
                abortController.abort()
            }


        }, [auth.isAuthenticated().user._id])

    }


    const addStock = (item) => {
        item.amount++
    }

    const removeStock = (item) => {
        item.amount--
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
                            <ListItemText primary={item.name} secondary={"£" + item.price+"   Amount in Stock: "+item.amount} />
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => addStock(item)}>
                                    <Typography>+</Typography>
                                </IconButton>
                                <IconButton onClick={() => removeStock(item)}>
                                    <Typography>-</Typography>
                                </IconButton>
                                <IconButton onClick={() => addItem(item)}>
                                    <Typography>Save Changes</Typography>
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
