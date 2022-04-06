import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    price: {
      type: Number,
    }
})

const itemModel = mongoose.model('Item', itemSchema);
itemModel.createIndexes();
export default itemModel
