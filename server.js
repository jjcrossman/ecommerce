// REQUIRES
const express = require( "express" );
const app = express();
const { json } = require( "body-parser" );
const mongoose = require( "mongoose" );
const cors = require( "cors" );
const port = 4000;
const mongoUri = "mongodb://localhost:27017/ecommerce";

//USES
app.use( cors() );
app.use( json() );
app.use( express.static( `${ __dirname }/public` ) );

// MONGOOSE CONNECTION TO MONGODB
mongoose.connect( mongoUri );

mongoose.connection.once( "open", () => console.log( `Mongoose connected to MongoDB at ${ mongoUri }` ) );


// MASTER ROUTES
require( "./masterRoutes.js" )( app );


//LISTEN
app.listen( port, () => console.log( `eCommerce app is listening on port: ${ port }` ) );
