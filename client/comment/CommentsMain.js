import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import { Redirect, Link } from 'react-router-dom'
import auth from '../auth/auth-helper'
import { createComment, listComments } from './api-comment'

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

export default function Comments() {
    const classes = useStyles()
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        listComments(signal).then((data) => {
            if (data && data.error) {
                setComments(data)
            } else {
                setComments(data)
            }
        })

        return function cleanup() {
            abortController.abort()
        }
    }, [])

    const clickSubmit = () => {
        var badWordDetected = false

        badWordList.forEach(function (badWord) {
            if (comments.comment.includes(badWord)) {
                badWordDetected = true
            }
        })

        if (!badWordDetected) {
            const comment = {
                name: comments.name || undefined,
                comment: comments.comment || undefined
            }
            createComment(comment).then((data) => {
                if (data && data.error) {
                    setComments({ ...comments, error: data.error })
                } else {
                    setComments({ ...comments, error: "" })
                }
            })
        }
        else {
            alert("SUBMITTING COMMENTED FAILED: BAD WORD DETECTED")
        }

    }


    const handleChange = name => event => {
        setComments({ ...comments, [name]: event.target.value })
    }

    const badWordList = ["crap"]


    console.log(JSON.stringify(items));
    return (
        <Paper className={classes.root} elevation={4}>
            <Typography variant="h6" className={classes.title}>
                WELCOME TO THE COMMENTS PAGE
            </Typography>

            <TextField
                id="name"
                label="name"
                value={comments.name}
                onChange={handleChange('name')}
                margin="normal"
            /><br />

            <TextField
                id="multiline-flexible"
                label="comment"
                multiline
                rows="2"
                value={comments.comment}
                onChange={handleChange('comments')}
                margin="normal"
            /><br />

            <CardActions>
                <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit Comment</Button>
            </CardActions>

            <Divier />

            <CommentsList comments={comments}></CommentsList>


        </Paper>
    )
}


