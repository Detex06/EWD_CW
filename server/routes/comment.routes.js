import express from 'express'
import commentCtrl from '../controllers/comment.controller'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()


router.route('/api/comments')
    .get(commentCtrl.listComments)
    .post(commentCtrl.createComment)

router.route('/api/comments/admin/:userId')
    .get(authCtrl.requireSignin, authCtrl.hasAdminAuthorization, commentCtrl.listCommentsAdmin)
    .put(authCtrl.requireSignin, authCtrl.hasAdminAuthorization, commentCtrl.updateComment)
    .delete(authCtrl.requireSignin, authCtrl.hasAdminAuthorization, commentCtrl.removeComment)

export default router
