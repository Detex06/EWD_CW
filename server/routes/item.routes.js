import express from 'express'
import itemCtrl from '../controllers/user.controller'

const router = express.Router()


router.route('/api')
    .get(itemCtrl.list)
    //.post(itemCtrl.create)


export default router