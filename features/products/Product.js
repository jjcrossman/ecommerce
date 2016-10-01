const mongoose = require( "mongoose" );

const Product = new mongoose.Schema( {
  title: {
    type: String
    , require: true
    , trim: true
    , unique: true
  }
  , description: {
    type: String
    , require: true
    , trim: true
    , default: "A fine product that's sure to fit your needs. Buy today!"
  }
  , price: {
    type: Number
    , require: true
    , default: 0.00
    , min: 0
  }
} );

module.exports = mongoose.model( "Product", Product );
