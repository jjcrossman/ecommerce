// REQUIRES
const express = require( "express" );
const app = express();
const { json } = require( "body-parser" );
const cors = require( "cors" );
const mongojs = require( "mongojs" );
const db = mongojs( "ecommerce", [ "products" ] );
const port = 7000;

//USES
app.use( cors() );
app.use( json() );
app.use( express.static( `${ __dirname }/public` ) );

//MIDDLEWARE

//ROUTES
const productsRoutes = require( "./features/products/productsRoutes.js" );
productsRoutes( app );


//LISTEN
app.listen( port, () => console.log( `eCommerce app is listening on port: ${ port }` ) );
