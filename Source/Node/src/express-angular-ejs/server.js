/**
 * Module dependencies
 */

var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var methodOverride = require( 'method-override' );
var morgan = require( 'morgan' );
var routes = require( './routes' );
var api = require( './routes/api' );
var http = require( 'http' );
var path = require( 'path' );

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set( 'port', process.env.PORT || 3000 );
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );
app.use( morgan( 'dev' ) );
app.use( bodyParser() );
app.use( methodOverride() );
app.use( express.static( path.join( __dirname, 'public' ) ) );

var env = process.env.NODE_ENV || 'development';

// development only
if( env === 'development' )
{
}

// production only
if( env === 'production' )
{
}


/**
 * Routes
 */

// serve index and view partials
app.get( '/', routes.index );
app.get( '/partials/:name', routes.partials );

// JSON API
app.get( '/api/name', api.name );

// redirect all others to the index (HTML5 history)
app.get( '*', routes.index );


/**
 * Start Server
 */
http.createServer( app ).listen( app.get( 'port' ), function()
{
	console.log( 'Express server listening on port ' + app.get( 'port' ) );
} );
