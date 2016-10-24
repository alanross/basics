var express = require( 'express' );
var router = express.Router();

// middleware that is specific to this router
router.use( function timeLog( req, res, next )
{
	console.log( 'Time: ', Date.now() );

	next();
} );

router.get( '/', function( req, res )
{
	res.render( 'pages/index' );
} );

router.get( '/static', function( req, res )
{
	res.sendFile( __dirname + "/" + "static/static.html" );
} );

router.post( "/request", function( req, res )
{
	/* some server side logic */
	res.send( "OK" );
} );

router.use( express.static( 'static' ) );

/* serves all the static files */
router.get( /^(.+)$/, function( req, res )
{
	console.log( 'static file request : ' + req.params );
	res.sendfile( __dirname + req.params[ 0 ] );
} );

// Important this route is added last, otherwise it will
// prevent a real request from being handled.
router.get( '*', function( req, res, next )
{
	var err = new Error();
	err.status = 404;
	next( err );
} );

// When you pass an Error to next, Express will not
// jump to the next route or middleware, but will
// instead jump to processing what is known as error
// middleware. handling 404 errors
router.use( function( err, req, res, next )
{
	if( err.status !== 404 )
	{
		return next();
	}

	res.send( err.message || 'My error message' );
} );

module.exports = router;