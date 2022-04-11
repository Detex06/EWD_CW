import React, { useState, useEffect } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'



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



