const productsCtrl = require( "./productsCtrl.js" );

module.exports = app => {
  app.post( "/api/products", productsCtrl.postProduct );
  app.get( "/api/products", productsCtrl.getProducts );
  app.get( "/api/products/:id", productsCtrl.getOneProduct );
  app.put( "/api/products/:id", productsCtrl.putProducts );
  app.delete( "/api/products/:id", productsCtrl.deleteProduct );
};
