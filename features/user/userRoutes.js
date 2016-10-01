const userCtrl = require ( "./userCtrl.js" );

module.exports = app => {

  app.route( "/api/user" )
    .get( userCtrl.getUsers )
    .post( userCtrl.addUser );

  app.route( "/api/user/:id" )
    .get( userCtrl.getUserById );

  app.route( "/api/cart/:user_id/update" )
    .put( userCtrl.updateCartByUserIdAndQuery );

  app.route( "/api/cart/:user_id" )
    .post( userCtrl.addProductToCartByUserId );

};
