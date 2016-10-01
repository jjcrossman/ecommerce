const mongoose = require( "mongoose" );

const productSchema = new mongoose.Schema( {
  items: [ {
    type: Object
    , ref: "Product"
  } ]
  , quantity: {
    type: Number
    , min: 0
  }
} );

module.exports = productSchema;
