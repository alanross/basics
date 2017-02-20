// https://blog.yld.io/2015/06/10/getting-started-with-react-and-node-js

var express = require( "express" );
var browserify = require( "browserify" );
var React = require( "react" );
var jsx = require( "node-jsx" );
var app = express();

jsx.install();

var Books = require( "./views/index.jsx" );

app.use( "/bundle.js", function( req, res )
{
	res.setHeader( "content-type", "application/javascript" );

	browserify( "./app.js", { debug: true } ).transform( "reactify" ).bundle().pipe( res );
} );

app.use( "/", function( req, res )
{
	var books = [
		{ title: "Book 1", read: false },
		{ title: "Book 2", read: false }
	];

	res.setHeader( "Content-Type", "text/html" );
	res.end( React.renderToStaticMarkup(
			React.DOM.body(
					null,
					React.DOM.div( {
						id: "container",
						dangerouslySetInnerHTML: { __html: React.renderToString( React.createElement( Books, { books: books } ) ) }
					} ),
					React.DOM.script( {
						"id": "initial-data",
						"type": "text/plain",
						"data-json": JSON.stringify( books )
					} ),
					React.DOM.script( {
						src: "/bundle.js"
					} )
			)
	) );
} );

var server = app.listen( 3000, function()
{
	var addr = server.address();
	console.log( "Listening @ http://localhost:%d", addr.port );
} );