var mongoose = require( "mongoose" );
var Schema = mongoose.Schema;
var Comment = require( "./comment" );

var ArticleSchema = new Schema( {
	title: String,
	slug: String,
	content: String,
	author: String,
	comments: [ Comment.schema ]
} );

mongoose.model( 'Article', ArticleSchema );