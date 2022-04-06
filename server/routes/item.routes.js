import express from 'express'
import itemCtrl from '../controllers/item.controller'

const router = express.Router()


router.route('/api/')
    .get(itemCtrl.list)
    //.post(itemCtrl.create)


export default router