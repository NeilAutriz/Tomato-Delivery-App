import mongoose from 'mongoose';

const foodSchema = mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    type: {type: String, require: true},
    price: {type: Number, require: true},
    image: {type: String, require: true}
})

export const foodModel = new mongoose.model('foodModel', foodSchema);