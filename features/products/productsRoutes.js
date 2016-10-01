const productsCtrl = require( "./productsCtrl.js" );

module.exports = app => {

  app.route( "/api/products" )
    .post( productsCtrl.postProduct )
    .get( productsCtrl.getProducts );

  app.route( "/api/products/:id" )
    .get( productsCtrl.getOneProduct )
    .put( productsCtrl.putProducts )
    .delete( productsCtrl.deleteProduct );

};
