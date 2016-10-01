const mongoose = require( "mongoose" );
const Cart = require( "./cartSchema.js" );

const User = new mongoose.Schema( {
  name: {
    type: String
    , required: true
  }
  , email: {
    type: String
    , required: true
    , unique: true
    , index: true
  }
  , password: {
    type: String
    , required: true
  }
  , cart: [ Cart ]
  , orders: [ { default: [] } ]
} );

module.exports = mongoose.model( "User", User );
