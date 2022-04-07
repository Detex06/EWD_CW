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
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

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

    <Grid container spacing={2} columns={12}>
                <Grid item xs={8}>
                    <Items items={items}></Items>
                </Grid>
                <Grid item xs={4}>
                    <Items items={items}></Items>
                </Grid>
            </Grid>
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
    }, [])

    console.log(JSON.stringify(items));
    return (
        <Paper className={classes.root} elevation={4}>
            <Typography variant="h6" className={classes.title}>
                WELCOME TO THE SHOP
            </Typography>
            
            <Box sx={{ width: 1 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box gridColumn="span 8">
                        <Items items={items}></Items>
                    </Box>
                    <Box gridColumn="span 4">
                        <Items items={items}></Items>
                    </Box>
                </Box>
            </Box>
            
        </Paper>
    )
}