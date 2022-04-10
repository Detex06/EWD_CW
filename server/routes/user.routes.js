import express from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'
import itemCtrl from '../controllers/item.controller'

const router = express.Router()

router.route('/api/userInItems')
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.readHome)

router.route('/api/users/admin/:userId')
  .get(authCtrl.requireSignin, authCtrl.hasAdminAuthorization, userCtrl.listadmin)


router.route('/api/users')
  .get(userCtrl.list)
  .post(userCtrl.create)

router.route('/api/users/:userId')
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)

router.route('/api/user/:userId')
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.updateBasket)

router.param('userId', userCtrl.userByID)

export default router