import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/core/ShoppingCart';
import Person from '@material-ui/icons/Person'

export default function Items(prop) {
    const [basket, setBasket] = useState([])

    const basketAdd = (item) => {
        console.log("Added Item to Basket"+basket.lenght)
        console.log(JSON.stringify(basket))
        setBasket([...basket,item])
    } 

    return (
        <List dense>
                {prop.items.map((item) => {
                    console.log("LOADING ITEMS");
                    console.log(JSON.stringify(item));
                    if (item.amount !== 0) {
                        return (
                            
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Person />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item.name} secondary={"£" + item.price} />

                                <AddShoppingCartIcon>
                                    <IconButton onlClick={basketAdd(item)}>
                                        <BsFillCartPlusFill/>
                                    </IconButton>
                                </AddShoppingCartIcon>
                                
                                
                            </ListItem>
                            
                        )
                    }
                })
                }
            </List>
    )
}


