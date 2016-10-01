const mongoose = require( "mongoose" );

const cartSchema = new mongoose.Schema( {
    item: {
      type: mongoose.Schema.Types.ObjectId
      , ref: "Product"
      , required: true
    }
    , quantity: {
      type: Number
      , min: 1
    }
} );

module.exports = cartSchema;
