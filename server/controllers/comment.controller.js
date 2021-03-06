import Comment from '../models/comment.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'

const createComment = async (req, res) => {
    const comment = new Comment(req.body)
    try {
        await comment.save()
        return res.status(200).json({
            message: "Successfully added a comment!"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const listComments = async (req, res) => {
    try {
        let comments = await Comment.find().select('name comment created')
        res.json(comments)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const listCommentsAdmin = async (req, res) => {
    try {
        let comments = await Comment.find().select('name comment created')
        res.json(comments)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const updateComment = async (req, res) => {
    
    try {
        let comments = req.profile
        comments = extend(user, req.body)
        await comments.save()
        res.json(comment)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}


const removeComment = async (req, res) => {
    try {
        //let comments = await Comment.find().select('name comment created')
        //let deletedComment = await comments.remove(req.body)
        let comments = new Comment(req.body)
        await comments.save()
        res.json(comments)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default {
    createComment,
    listComments,
    listCommentsAdmin,
    updateComment,
    removeComment
}
