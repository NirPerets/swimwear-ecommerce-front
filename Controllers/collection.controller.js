const express = require('express')
var router = express.Router()
const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const Collection = mongoose.model('Collection')

router.post('/', (req, res) => {
    let collectionTitle = ''
    Collection.findOne(
        { title : req.body.title },
        async (err, collection) => {
            if(err) return console.log('error getting product - ', err)
            await Promise.all(collection.products.map(product => {
                collectionTitle = collection.title
                return Product.findOne({ _id : product }).exec()
            })).then(foundProducts => {
                return res.status(200).send({ 
                    products : foundProducts,
                    title : collectionTitle
                })
            })
        }
    )
})

module.exports = router