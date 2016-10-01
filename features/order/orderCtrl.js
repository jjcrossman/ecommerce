const mongoose = require( "mongoose" );
const Order = require( "./Order.js" );
const User = require( "../user/User.js" );

module.exports = {
  getOrders( req, res ) {
    console.log( "This is /api/order get" );
    Order.find( {}, ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( response );
    } );
  }
  , addOrderByUserId( req, res ) {
    console.log( "This is /api/order/:user_id post" );
    User.findById( req.params.user_id, ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }

      let userObj = response;
      console.log( `userObj.cart is ${ userObj.cart }` );
      console.log( `userObj.cart[0].item is ${ userObj.cart[0].item }` );
      console.log( `userObj.cart[0].quantity is ${ userObj.cart[0].quantity }` );
      let productsArray = [];
      for ( let i = 0; i < userObj.cart.length; i++ ) {
        let obj = {};
        obj.item_id = userObj.cart[ i ].item;
        obj.quantity = userObj.cart[ i ].quantity;
        productsArray.push( obj );
      }

      let userOrder = {
        products: productsArray
        , user: req.params.user_id
      };

      new Order( userOrder )
      .save( ( err, response ) => {
        if ( err ) {
          res.status( 500 ).json( err );
        }
        userObj.cart = [];
        console.log( `response is ${ response }`);
        userObj.orders.push( mongoose.Types.ObjectId( response._id ) );
        userObj.save( ( err, response ) => {
          if (err) {
            res.status( 500 ).json( err );
          }
            res.status( 201 ).json( response );
        } );

        } );
    } );
  }
};
