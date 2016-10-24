
exports = module.exports = function( mongoUrl )
{
	var mongoose = require( 'mongoose' );
	var fs = require( 'fs' );
	var models_path = process.cwd() + '/app/models';

	mongoose.connect( mongoUrl, { server: { auto_reconnect: true } } );

	var db = mongoose.connection;

	db.on( 'error', function( err )
	{
		console.error( 'MongoDB connection error:', err );
	} );

	db.once( 'open', function callback()
	{
		console.info( 'MongoDB connection is established' );
	} );

	db.on( 'disconnected', function()
	{
		console.error( 'MongoDB disconnected!' );

		mongoose.connect( mongoUrl, { server: { auto_reconnect: true } } );
	} );

	db.on( 'reconnected', function()
	{
		console.info( 'MongoDB reconnected!' );
	} );

	fs.readdirSync( models_path ).forEach( function( file )
	{
		if( ~file.indexOf( '.js' ) )
		{
			console.log( "require", models_path + '/' + file );
			require( models_path + '/' + file )
		}
	} );
};