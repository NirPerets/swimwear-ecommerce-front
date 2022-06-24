const express = require('express')
var router = express.Router()
const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const Collection = mongoose.model('Collection')

router.post('/add', (req, res) => {
    let product = new Product()
    product.title = req.body.title
    product.description = req.body.description
    product.title = req.body.title
    product.price = req.body.price
    product.comparePrice = req.body.comparePrice
    product.vendor = req.body.vendor
    product.sku = req.body.sku
    product.quantity = req.body.quantity

    product.save((err, product) => {
        if(err) {
            console.log('Error saving product - ' + err)
        } else {
            console.log(product.sku + ' - saved successfully')
        }
    })
})

router.post('/', (req, res) => {
    Product.findOne({ sku : req.body.sku }, (err, product) => {
        if(err) return res.status(403).send()
        else {
            return res.status(200).send({ product : product })
        }
    })
})

module.exports = router