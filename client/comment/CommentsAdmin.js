import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import myImg from './../assets/images/myimage.png'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Redirect, Link } from 'react-router-dom'
import auth from '../auth/auth-helper'
import { createComment, listComments, listCommentsAdmin } from './api-comment'

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
    },
    title: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    }

}))

export default function CommentsAdmin({ match }) {
    var redirectToComments = false
    const classes = useStyles()
    const [comments, setComments] = useState([]);
    const jwt = auth.isAuthenticated()

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        listCommentsAdmin({ userId: match.params.userId }, { t: jwt.token }, signal).then((data) => {
            if (data && data.error) {
                setComments(data)
            } else {
                setComments(data)
            }
        })

        return function cleanup() {
            abortController.abort()
        }

    }, [match.params.userId])


    if (redirectToComments) {
        redirectToComments = false
        return (<Redirect to={'/comments/admin'} />)
    }


    const removeThisComment = (comment) => {
        
        removeComment({
            userId: props.userId
          }, {t: jwt.token}).then((data) => {
            if (data && data.error) {
              console.log(data.error)
            } else {
              auth.clearJWT(() => console.log('deleted'))
              redirectToComments= true
            }
          })
      }


    const handleChange = name => event => {
        setComments({ ...comments, [name]: event.target.value })
    }

    console.log(JSON.stringify(items));
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

                            <IconButton onClick={() => removeThisComment(comment)}>
                                <Typography>Remove Comment</Typography>
                            </IconButton>
                        </ListItem>
                    )

                })
                }
            </List>

        </Paper>
    )
}

