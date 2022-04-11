import express from 'express'
import commentCtrl from '../controllers/comment.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()


router.route('/api/comments')
    .get(commentCtrl.listComments)
    .post(commentCtrl.createComment)


//authCtrl.requireSignin, authCtrl.hasAdminAuthorization,
router.route('/api/comments/admin/:userId')
    .get(commentCtrl.listCommentsAdmin)
    .put(commentCtrl.updateComment)
    .delete(commentCtrl.removeComment)

export default router
