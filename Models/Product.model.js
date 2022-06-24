const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    media: Object,
    price: String,
    sku: String,
    details: String,
    model: String,
    collectionId: { type: Schema.Types.ObjectId, ref: 'Collection' },
    variants: [Object],
});

mongoose.model('Product', productSchema)