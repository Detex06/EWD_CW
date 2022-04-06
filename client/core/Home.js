import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import myImg from './../assets/images/myimage.png'
import { Link } from 'react-router-dom'
import Item from '../shop/Items'
import { list } from '../shop/api-item.js'

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

export default function Home() {
    const classes = useStyles()
    const {items} = item_list;
    {items.map((item) => {
        <Item key={item.} item={item}></Item>
    })}
    return (
        <Card className={classes.card}>
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
*/
export default function Home() {
    const classes = useStyles()
    const {items} = useState([]);
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        list(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setUsers(data)
            }
        })
        return function cleanup() {
            abortController.abort()
        }
    }, [])
    return (
        <Paper className={classes.root} elevation={4}>
            <Typography variant="h6" className={classes.title}>
                Welcome to the Shop
            </Typography>
            <List dense>
                {items.map((item, i) => {
                    return <Link to={"/shop/" + item._id} key={i}>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <Person />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.name} />
                            <ListItemText primary={item.price} />
                            <Item key={item._id} item={item}></Item>
                            <ListItemSecondaryAction>
                                <IconButton>
                                    <ArrowForward />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Link>
                })
                }
            </List>
        </Paper>
    )
}