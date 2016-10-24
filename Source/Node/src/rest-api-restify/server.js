const restify = require( 'restify' );
const morgan = require( 'morgan' );
const database = require( './app/core/database' );
const routes = require( './app/core/routes' );

const port = process.env.PORT || 3000;
const mongo = process.env.MONGO_URL || "mongodb://localhost:27017/my_db_name";

const server = restify.createServer();

// log requests to the console
server.use( morgan( 'dev' ) );

// allow cross domain access
server.use( function crossOrigin( req, res, next )
{
	res.header( "Access-Control-Allow-Origin", "*" );
	res.header( 'Access-Control-Allow-Methods', 'GET, PUT, POST' );
	res.header( "Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization" );
	return next();
} );

//server.use( restify.CORS() );
server.use( restify.fullResponse() );

server.use( restify.bodyParser() );

database( mongo );

routes( server );

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