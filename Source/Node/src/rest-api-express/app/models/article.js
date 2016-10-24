var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var ArticleSchema = new Schema( {
	title: String
} );

mongoose.model( 'Article', ArticleSchema );

console.log( "schema" );