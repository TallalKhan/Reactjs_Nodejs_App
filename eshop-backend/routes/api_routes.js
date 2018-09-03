const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');
global.bodyParser = require('body-parser');

// connect to mongoodb
mongoose.connect('mongodb://Original:eshop123@ds239692.mlab.com:39692/eshopdb');
mongoose.Promise = global.Promise;

router.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb',
  parameterLimit: 100000
}))
router.use(bodyParser.json({
  limit: '50mb',
  parameterLimit: 100000
}))









router.post('/addProduct', function (req, res, next) {
  console.log(req.body);

  var product = Product({
    title: '' + req.body.title ,
    price: '' + req.body.price,
    display_size: '' + req.body.display_size,
    Resolution: '' + req.body.Resolution,
    Ram: '' + req.body.RAM,
    processor: '' + req.body.processor,
    Rom : '' + req.body.Rom,
    picture : '' + req.body.picture
  }).save(function (err) {
    if (err) {
      res.status(400).json({err: err , status: false});
    }else{
      res.status(200).json({ message : 'Record Inserted' , status: true })
    }
  })  

});




router.get('/getList', function (req, res, next) {

  Product.find({}).then(function (Product) {
    res.json({data : Product});
    // res.send('working the is given');
  });
});


router.get('/getProductDetail/:id', function (req, res, next) {
  console.log(req.params.id);
  Product.findOne({_id : req.params.id}).then(function (Product) {
    res.send(Product);
  });
});




module.exports = router;
