const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {type: String, required: true, unique: true} ,
    description: String,
    price: {type: Number, min:[0,'wrong price'],required: true},
    discountPercentage: {type: Number, min:[0,'wrong min discount'], max:[50,'wrong max discount']},
    rating: {type: Number, min:[0,'wrong min rating'], max:[5,'wrong max rating'], default:0},
    brand: {type: String,required: true},
    category: {type: String, required: true},
    thumbnail: {type: String, required: true},
    images: [ String ]
  });
  
exports.Product = mongoose.model('Product', productSchema);