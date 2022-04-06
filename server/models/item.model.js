import mongoose from 'mongoose'

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    price: {
      type: Number,
    }
})

const itemModel = mongoose.model('Item', ItemSchema);
itemModel.createIndexes();
export default itemModel
