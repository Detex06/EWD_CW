import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import myImg from './../assets/images/myimage.png'
import { Link } from 'react-router-dom'
import Items from '../shop/Items'
import { listItems } from '../shop/api-item.js'

import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Person from '@material-ui/icons/Person'


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
    },
    title: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    },
    media: {
        minHeight: 400
    },
    credit: {
        padding: 10,
        textAlign: 'right',
        backgroundColor: '#ededed',
        borderBottom: '1px solid #d0d0d0',
        '& a': {
            color: '#3f4771'
        }
    }
}))

//replae "myImg" with appropriate images latr
/*
//!!!!!!!!!!! OLD HOME START !!!!!!!!!!!!!!
export default function Home() {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
                    
            <Link to="/users"> Users </Link>
            <Typography variant="h6" className={classes.title}>
                Home Page
            </Typography>
            <CardMedia className={classes.media} image={myImg} title="My Image" />
            <Typography variant="body2" component="p" className={classes.credit} 
                color="textSecondary">Photo of: Potato</Typography>
            <CardContent>
                <Typography variant="body1" component="p">
                    Welcome to Lab 6 home page.
                </Typography>
            </CardContent>
        </Card>
        
    )
//!!!!!!!!!!! OLD HOME END !!!!!!!!!!!!!!


                    return <Link to={"/shop/" + item._id} key={i}>
                    </Link>


                    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        list(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setItems(data)
            }
        })
        return function cleanup() {
            abortController.abort()
        }
    }, [])

    
    <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <Person />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText 
                            primary={item.name} 
                            secondary={item.price} 
                            />
                            <ListItemSecondaryAction>
                                <IconButton>
                                    <ArrowForward />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
*/
export default function Home() {
    const classes = useStyles()
    const [items, setItems] = useState([{
        name: '',
        price: '',
        amount: '',
    }]);
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        listItems(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setItems(data)
            }
        })
        return function cleanup() {
            abortController.abort()
        }
        /*
        fetch("/").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setItems(jsonRes))*/
    }, [])

    console.log(JSON.stringify(items));
    return (
        <Paper className={classes.root} elevation={4}>
            <Typography variant="h6" className={classes.title}>
                All Users
            </Typography>
            
            <List dense>
                {items.map((item) => {
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <ArrowForward/>
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <Person />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Single-line item"
                            secondary={secondary ? 'Secondary text' : null}
                        />
                    </ListItem>
})
}
            </List>
        </Paper>
    )
}