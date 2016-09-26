const mongojs = require( "mongojs" );
const db = mongojs( "ecommerce", [ "products" ] );

module.exports = {
  postProduct( req, res ) {
    db.products.save( req.body, ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      } else {
        return res.status( 200 ).json( response );
      }
    } );
  }
  , getProducts( req, res ) {
    let search = req.query;
    db.products.find( search, ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      } else {
        return res.status( 200 ).json( response );
      }
    } );
  }
  , getOneProduct( req, res ) {
    let idObj = {
        _id: mongojs.ObjectId( req.params.id )
    };
    db.products.findOne( idObj, ( err, response ) => {
        if( err ) {
            return res.status( 500 ).json( err );
        } else {
            return res.json( response );
        }
    } );
  }
  , putProducts( req, res ) {
    let query = {
        _id: mongojs.ObjectId( req.params.id )
    };
    db.products.update( query, req.body, ( err, response ) => {
        if( err ) {
            return res.status( 500 ).json( err );
        } else {
            return res.json( response );
        }
    } );
  }
  , deleteProduct( req, res ) {
    var query = {
        _id: mongojs.ObjectId( req.params.id )
    };
    db.products.remove( query, function( err, response ){
        if( err ) {
            return res.status( 500 ).json( err );
        } else {
            return res.json( response );
        }
    });
  }
};
