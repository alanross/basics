/*
 * Install:
 * $: npm install
 *
 * Run:
 * $: node server.js
 *
 * http://expressjs.com/en/guide/routing.html
 */

const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const routes = require( './routes' );
const app = express();
const port = process.env.PORT || 3000;

function logErrors( err, req, res, next )
{
	console.error( err.stack );

	next( err );
}

function clientErrorHandler( err, req, res, next )
{
	if( req.xhr )
	{
		res.status( 500 ).send( { error: 'Something failed!' } );
	}
	else
	{
		next( err );
	}
}

function errorHandler( err, req, res, next )
{
	res.status( 500 );
	res.render( 'error', { error: err } );
}

app.set( 'view engine', 'ejs' );

app.use( routes );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use( logErrors );
app.use( clientErrorHandler );
app.use( errorHandler );

app.listen( port, ( err ) =>
{
	if( err )
	{
		return console.log( 'Something failed!', err );
	}

	console.log( `server is listening on ${port}` );
} );