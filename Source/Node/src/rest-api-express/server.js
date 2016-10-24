const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const morgan = require( 'morgan' );
const database = require('./app/core/database');
const routes = require('./app/core/routes');

const port = process.env.PORT || 3000;
const mongo = process.env.MONGO_URL || "mongodb://localhost:27017/my_db_name";

const server = express();

// log requests to the console
server.use( morgan( 'dev' ) );

// configure body parser
server.use( bodyParser.urlencoded( { extended: true } ) );
server.use( bodyParser.json() );

// setup db
database( mongo );

// setup routes
routes( server, express );

server.listen( port, function( err )
{
	if( err )
	{
		console.error( err )
	}
	else
	{
		console.log( 'App is ready at : ' + port )
	}
} );