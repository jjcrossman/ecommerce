const User = require( "./User.js" );

module.exports = {
  addUser( req, res ) {
    console.log( "This is /api/user POST" );
    new User( req.body ).save( ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 201 ).json( response );
    } );
  }
  , getUsers ( req, res ) {
    console.log( "This is /api/user GET" );
    User.find( {} )
      .populate( "cart.item", "title price" )
      .exec( ( err, response ) => {
        if ( err ) {
          return res.status( 500 ).json( err );
        }
          return res.status( 200 ).json( response );
      } );
  }
  , getUserById( req, res ) {
    console.log( "This is /api/user/:id GET" );
    User.findById( req.params.id )
      .populate( "cart.item", "title price" )
      .exec()
      .then( response => {
        return res.status( 200 ).json( response );
      } )
      .catch( error => {
        return res.status( 500 ).json( error );
      } );
  }
  , addProductToCartByUserId( req, res ) {
    console.log( "This is /api/cart/:user_id POST" )
    User.findByIdAndUpdate( req.params.user_id, { $push: { cart: req.body } }, ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 201 ).json( response );
    } );
  }
  , updateCartByUserIdAndQuery( req, res ) {
    console.log( "This is /api/cart/:user_id/update PUT" )
    User.findById( req.params.user_id, ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      let myUser = response;
      let qty = req.query.qty;
      let foundItem = -1;
      for ( let i = 0; i < myUser.cart.length; i++ ) {
        if ( parseInt( myUser.cart[ i ].item ) === parseInt( req.query.itemId ) ) {
          foundItem = i;
        }
      }

      if ( foundItem >= 0 ) {

        if ( qty === 0 ) {
          myUser.cart.splice( foundItem, 1 );
        } else {

          myUser.cart[ foundItem ].quantity = parseInt( qty );
        }
      }
      saveUser( myUser, req, res );
    } );
    function saveUser( userToSave, req, res ) {
      userToSave.save( ( err, response ) => {
        if ( err ) {
          return res.status( 500 ).json( err );
        }
        return res.status( 200 ).json( response );
      } );
    }
  }
};
