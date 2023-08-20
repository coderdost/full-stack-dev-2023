const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, min: [0, 'Price should be greater than zero.'], required: true },
    discountPercentage: { type: Number, min: [0, 'wrong min value',], max: [50, 'wrong max value'] },
    rating: { type: Number, min: [0, 'wrong min rating'], max: [5, 'wrong max rating'] },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    thumbnail: { type: String, required: true },
    images: [String]
});

exports.Product = mongoose.model('Product', ProductSchema)