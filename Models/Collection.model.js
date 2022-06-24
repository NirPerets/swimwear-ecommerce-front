const mongoose = require('mongoose')
const Schema = mongoose.Schema

const collectionSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    handle: String
});

mongoose.model('Collection', collectionSchema)