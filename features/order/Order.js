const mongoose = require( "mongoose" );
// const Product = require( "./productSchema.js" );

const Order = new mongoose.Schema( {
  user: {
    type: mongoose.Schema.Types.ObjectId
    , ref: "User"
    , required: true
  }
  , products: [ ]
  , ordered: {
    type: Date, default: new Date()
  }
} );

module.exports = mongoose.model( "Order", Order );
