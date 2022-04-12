import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import { Redirect, Link } from 'react-router-dom'
import auth from '../auth/auth-helper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import IconButton from '@material-ui/core/IconButton'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import { listComments, listCommentsAdmin, removeComment } from './api-comment'


const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
    },
    title: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    }

}))

export default function Comments({ match }) {
    const classes = useStyles()
    const [comments, setComments] = useState([]);
    var jwt = auth.isAuthenticated()

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        //this isnt authenticated as i couldnt get it to work
        listCommentsAdmin({ userId: auth.authenticated().user._id }, { t: jwt.token }, signal).then((data) => {
            if (data && data.error) {
                console.error()
            } else {
                setComments(data)
            }
        })

        return function cleanup() {
            abortController.abort()
        }

    }, [match.params.userId])

    //not working
    const removeThisComment = (comment) => {

        console.log("BEFORE "+JSON.stringify(comments))
        const index = comments.indexOf(comment);
        if (index > -1) {
            comments.splice(index, 1);
        }
        console.log("AFTER "+JSON.stringify(comments))

        removeComment({
            userId: match.params.userId
        }, { t: jwt.token }, comments).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setComments(data)
            }
        })

        //window.location.reload()
    }


    return (
        <Paper className={classes.root} elevation={4}>
            <Typography variant="h6" className={classes.title}>
                WELCOME TO THE ADMIN COMMENTS PAGE
            </Typography>

            <Divider />

            <List dense>
                {comments?.map((comment) => {
                    return (
                        <ListItem>
                            <ListItemText primary={comment.name} secondary={comment.comment} />
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => removeThisComment(comment)}>
                                    <Typography>Remove Comment</Typography>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )

                })
                }
            </List>

        </Paper>
    )
}


