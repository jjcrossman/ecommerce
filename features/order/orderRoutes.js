const orderCtrl = require( "./orderCtrl.js" );

module.exports = app => {

  app.route( "/api/order" )
    .get( orderCtrl.getOrders );

  app.route( "/api/order/:user_id" )
    .post( orderCtrl.addOrderByUserId );

 

};
