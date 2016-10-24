/**
 * GET	http://localhost:3000/setup will create a test user
 * POST http://localhost:3000/api/authenticate with x-www-form-urlencoded body: name = "First Last" password = "password"
 * GET 	http://localhost:3000/api/users with a header parameter of `x-access-token` and the token
 * GET 	http://localhost:3000/api Show a message. This route is protected and will require a token too.
 */

const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const morgan = require( 'morgan' );
const mongoose = require( 'mongoose' );

const jwt = require( 'jsonwebtoken' ); // used to create, sign, and verify tokens
const User = require( './app/models/user' ); // get our mongoose model

const port = process.env.PORT || 3000; // used to create, sign, and verify tokens
const mongo = process.env.MONGO_URL || "mongodb://localhost:27017/my_db_name";
const secret = process.env.JWT_SECRET || "mysecret_72@+f$3s";

mongoose.connect( mongo );

// use body parser so we can get info from POST and/or URL parameters
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );

// use morgan to log requests to the console
app.use( morgan( 'dev' ) );

app.get( '/setup', function( req, res )
{
	// create a sample user
	var user = new User( { name: 'First Last', password: 'password', admin: true } );

	user.save( function( err )
	{
		if( err )
		{
			throw err;
		}

		console.log( 'User saved successfully' );

		res.json( { success: true } );
	} );
} );

// basic route (http://localhost:3000)
app.get( '/', function( req, res )
{
	res.send( 'Hello! The API is at http://localhost:' + port + '/api' );
} );

var apiRoutes = express.Router();

// ---------------------------------------------------------
// authentication (no middleware necessary since this is not authenticated)
// ---------------------------------------------------------
apiRoutes.post( '/authenticate', function( req, res )
{
	console.log( "req.body", req.body );

	// find the user
	User.findOne( { name: req.body.name }, function( err, user )
	{
		if( err )
		{
			throw err;
		}

		if( !user )
		{
			res.json( { success: false, message: 'Authentication failed. User not found.' } );
		}
		else if( user )
		{
			// check if password matches
			if( user.password != req.body.password )
			{
				res.json( { success: false, message: 'Authentication failed. Wrong password.' } );
			}
			else
			{
				// if user is found and password is right create a token
				var token = jwt.sign( user, secret, { expiresIn: 86400 } ); // expires in 24 hours

				res.json( { success: true, message: 'Enjoy your token!', token: token } );
			}
		}
	} );
} );

// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
apiRoutes.use( function( req, res, next )
{
	// check header or url parameters or post parameters for token
	var token = req.body.token || req.param( 'token' ) || req.headers[ 'x-access-token' ];

	// decode token
	if( token )
	{
		// verifies secret and checks exp
		jwt.verify( token, secret, function( err, decoded )
		{
			if( err )
			{
				return res.json( { success: false, message: 'Failed to authenticate token.' } );
			}
			else
			{
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;
				next();
			}
		} );
	}
	else
	{
		// if there is no token return an error
		return res.status( 403 ).send( { success: false, message: 'No token provided.' } );
	}
} );

// ---------------------------------------------------------
// authenticated routes
// ---------------------------------------------------------
apiRoutes.get( '/', function( req, res )
{
	res.json( { message: 'Welcome to my API' } );
} );

apiRoutes.get( '/users', function( req, res )
{
	User.find( {}, function( err, users )
	{
		res.json( users );
	} );
} );

apiRoutes.get( '/check', function( req, res )
{
	res.json( req.decoded );
} );

app.use( '/api', apiRoutes );

app.listen( port );

console.log( 'Listening at http://localhost:' + port );
