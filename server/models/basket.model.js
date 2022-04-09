import mongoose from 'mongoose'

const BasketSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    price: {
        type: Number
    },
    amount: {
        type: Number
    }
})



const basketModel = mongoose.model('Basket', BasketSchema);
basketModel.createIndexes();
export {basketModel,BasketSchema}
