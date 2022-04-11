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
import { readHome, updateBasket } from '../user/api-user.js'



export default function CommentsList(prop) {
    var setdirectToComments= false

    if (setdirectToComments) {
        setdirectToComments=false
        return (<Redirect to={'/comments/'}/>)
    }


    return (
        <List dense>
            {prop.comments?.map((comment) => {
                return (
                    <ListItem>
                        <ListItemText primary={comment.name} secondary={comment.comment}/>
                    </ListItem>
                )

            })
            }
        </List>
    )
}



