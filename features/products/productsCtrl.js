const Product = require( "./Product.js" );

module.exports = {
  postProduct( req, res ) {
    Product.create( req.body, ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      } else {
        return res.status( 201 ).json( response );
      }
    } );
  }
  , getProducts( req, res ) {
    Product.find( {}, ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      } else {
        return res.status( 200 ).json( response );
      }
    } );
  }
  , getOneProduct( req, res ) {

    Product.findById( req.params.id, ( err, response ) => {
        if( err ) {
            return res.status( 500 ).json( err );
        } else {
            return res.status( 200 ).json( response );
        }
    } );
  }
  , putProducts( req, res ) {

    Product.findByIdAndUpdate( req.params.id, { $set: req.body }, ( err, response ) => {
        if( err ) {
            return res.status( 500 ).json( err );
        } else {
            return res.status( 200 ).json( response );
        }
    } );
  }
  , deleteProduct( req, res ) {

    Product.findByIdAndRemove( req.params.id , function( err, response ){
        if( err ) {
            return res.status( 500 ).json( err );
        } else {
            return res.status( 200 ).json( response );
        }
    } );
  }
};
