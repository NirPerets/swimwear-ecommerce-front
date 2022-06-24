const express    = require('express')
require('./Models/db')
const mongoose   = require('mongoose')
const bodyparser = require('body-parser')

/* ================== END OF LIBRARIES ===================== */

const productController = require('./Controllers/product.controller')
const collectionController = require('./Controllers/collection.controller')

/* ================== END OF CONTROLLERS ===================== */

const Product = mongoose.model('Product')
const Collection = mongoose.model('Collection')

var app = express()
const port = process.env.PORT || 3000
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.use('/product', productController)
app.use('/collection', collectionController)

/* ================== END OF USES ================================= */

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/post', (req,res) => {
    res.send('ok')
})

app.listen(port, () => {
    mongoose.connect('mongodb+srv://nir:9976406@cluster0.vriqt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }, (err) => {
    if(!err) {
        console.log('Connection Success')
    } else {
        console.log('ERROR in connection of DB - ' + err)
    }
    })
    console.log(`Example app listening at http://localhost:${port}`)
  })