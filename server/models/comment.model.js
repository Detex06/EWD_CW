import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    comment: {
        type: String,
        trim: true,
        required: 'Comment is required'
    },
    created: {
        type: Date,
        default: Date.now
    }
})

const commentModel = mongoose.model('Comment', CommentSchema);
commentModel.createIndexes();
export default commentModel
