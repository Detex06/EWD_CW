import Item from '../models/item.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'

const list = async (req, res) => {
    try {
        let items = await Item.find().select('name price amount')
        res.json(items)
        console.log("JSON Product data recieved!")
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}


export default {
    list
}