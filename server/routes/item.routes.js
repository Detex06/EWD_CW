import express from 'express'
import itemCtrl from '../controllers/item.controller'

const router = express.Router()


router.route('/api/items')
    .get(itemCtrl.listItems)
//     //.post(itemCtrl.create)


export default router