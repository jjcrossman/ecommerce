const productsRoutes = require( "./features/products/productsRoutes.js" );
const orderRoutes = require( "./features/order/orderRoutes.js" );
const userRoutes = require( "./features/user/userRoutes.js" );

module.exports = app => {
  productsRoutes( app );
  orderRoutes( app );
  userRoutes( app );
};
