import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import { Redirect, Link } from 'react-router-dom'
import auth from '../auth/auth-helper'
import IconButton from '@material-ui/core/IconButton'
import { createComment, listComments } from './api-comment'
import Button from '@material-ui/core/Button'
import CommentsList from './CommentsList'

const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
    },
    title: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300
    },
    submit: {
      margin: 'auto',
      marginBottom: theme.spacing(2)
    }

}))

export default function Comments() {
    var redirectToComments = false
    const badWordList = ["crap"]

    const classes = useStyles()
    const [comments, setComments] = useState([]);
    const [values, setCommentValues] = useState({
        name: '',
        comment: ''
      })

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

        badWordList.forEach( badWord => {
            if (values.comment.includes(badWord)) {
                badWordDetected = true
            }
        })

        if (!badWordDetected) {
            const comment = {
                name: values.name || undefined,
                comment: values.comment || undefined
            }
            createComment(comment).then((data) => {
                if (data && data.error) {
                    setCommentValues(values)
                } else {
                    setCommentValues(values)
                    redirectToComments= true
                }
            })


            if (redirectToComments) {
                redirectToComments = false
                return (<Redirect to={'/comments/admin'} />)
            }
        }
        else {
            alert("SUBMITTING COMMENTED FAILED: BAD WORD DETECTED")
        }

    }


    const handleChange = name => event => {
        setCommentValues({ ...values, [name]: event.target.value })
        console.log(event.target.value)
    }



    return (
        <Paper className={classes.root} elevation={4}>
            <Typography variant="h6" className={classes.title}>
                WELCOME TO THE COMMENTS PAGE
            </Typography>

            <Divider />

            <TextField
                id="name"
                label="name"
                className={classes.textField}
                value={values.name}
                onChange={handleChange('name')}
                margin="normal"
            /><br />

            <TextField
                id="multiline-flexible"
                label="comment"
                className={classes.textField}
                multiline
                rows="2"
                value={values.comment}
                onChange={handleChange('comment')}
                margin="normal"
            /><br />

            <IconButton>
                <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit Comment</Button>
            </IconButton>

            <Divider />

            <Typography variant="h6" className={classes.title}>
                Comments: 
            </Typography>
            <CommentsList comments={comments}></CommentsList>


        </Paper>
    )
}


