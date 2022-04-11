import React, { useState, useEffect } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Basket from '../shop/Basket'
import auth from './../auth/auth-helper'
import { Redirect, Link } from 'react-router-dom'
import { readHome, updateBasket } from '../user/api-user.js'



export default function CommentsList(prop) {

    return (
        <List dense>
            {prop.comments?.map((comment) => {
                return (
                    <ListItem>
                        <ListItemText primary={comment.name} secondary={comment.comment} />
                    </ListItem>
                )
            })
            }
        </List>
    )
}



