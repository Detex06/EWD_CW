import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Edit from '@material-ui/icons/Edit'
import Person from '@material-ui/icons/Person'
import Divider from '@material-ui/core/Divider'
import DeleteUser from '../user/DeleteUser'
import auth from './../auth/auth-helper'
//import { read } from './api-user.js'
import { Redirect, Link } from 'react-router-dom'
//import { listBasket, updateBasket } from '../user/api-user'
import { values } from 'lodash'

// const useStyles = makeStyles(theme => ({
//     root: theme.mixins.gutters({
//         maxWidth: 600,
//         margin: 'auto',
//         padding: theme.spacing(3),
//         marginTop: theme.spacing(5)
//     }),
//     title: {
//         marginTop: theme.spacing(3),
//         color: theme.palette.protectedTitle
//     }
// }))

export default function Basket(prop) {

    const total = 0;
    // const classes = useStyles()
    // const [user, setBasket] = useState({
    //     name: '',
    //     password: '',
    //     email: '',
    //     about: '',
    //     basket: [],
    //     open: false,
    //     error: '',
    //     redirectToProfile: false
    // })
    // const [redirectToSignin, setRedirectToSignin] = useState(false)
    // const jwt = auth.isAuthenticated()

    // useEffect(() => {
    //     const abortController = new AbortController()
    //     const signal = abortController.signal

    //     listBasket({
    //         userId: match.params.userId
    //     }, { t: jwt.token }, signal).then((data) => {
    //         if (data && data.error) {
    //             setBasket({ ...user, error: data.error })
    //         } else {
    //             setBasket({ ...user, basket: data.basket })
    //         }
    //     })

    //     return function cleanup() {
    //         abortController.abort()
    //     }

    // }, [match.params.userId])

    // if (redirectToSignin) {
    //     return <Redirect to='/signin' />
    // }
    console.log("LOADING BASKET");
    console.log(JSON.stringify(prop.user))

    console.log(JSON.stringify(prop.user.basket))


    return (
        
        <List dense>
            
            {(prop.user).basket.map((item,i) => {

                console.log("LOADING ITEMS "+i);
                console.log(JSON.stringify(item));
                if (item.amount !== 0) {
                    total++
                    return (

                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Person />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item._id + " " + item.name} secondary={"£" + item.price + " x " + item.amount} />

                            <ListItemSecondaryAction>
                                <IconButton>
                                    <ArrowForward />
                                </IconButton>
                            </ListItemSecondaryAction>

                        </ListItem>
                    )
                }
            })
            }
            Total: £{total}
        </List>

    )
}

//onChange={handleChange} name="basket" value={item} 

// function handleChange(event) {
//     const { name, value } = event.target;

//     setBasket(oldBasket => {
//         return {
//             ...oldBasket,
//             [name]: value
//         }
//     })
// }

const basketAdd = (item) => {

    // console.log("ADD!!!!!!! " + JSON.stringify(item))

    // const user = {
    //     basket: item
    // }
    // updateBasket({
    //     userId: match.params.userId
    // }, {
    //     t: jwt.token
    // }, user).then((data) => {
    //     if (data && data.error) {
    //         setBasket({ ...user, error: data.error })
    //     } else {
    //         setBasket({ ...user, basket: data.basket })
    //     }
    // })


}

function basketRemove(item) {

}