import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Items from '../shop/Items'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
var itemsList = require('./../shop/itemList.json');

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

export default function Home() {
    const classes = useStyles()
    const [items] = useState(itemsList);
    
    return (
        <Paper className={classes.root} elevation={4}>
            <Typography variant="h6" className={classes.title}>
                WELCOME TO THE ADMIN SHOP
            </Typography>

            <Grid container columnSpacing={2} columns={12}>
                <Grid item xs={12}>
                    <ItemsAdmin items={items} ></ItemsAdmin>
                </Grid>
            </Grid>

        </Paper>
    )
}