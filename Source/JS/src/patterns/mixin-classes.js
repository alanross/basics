/* Mixin class. */

var Author = function( name, books )
{
	//...
};

var Mixin = function()
{
};

Mixin.prototype = {
	serialize: function()
	{
		var output = [];
		for( key in this )
		{
			output.push( key + ': ' + this[ key ] );
		}
		return output.join( ', ' );
	}
};

extend( Author, Mixin );

var author = new Author( 'John Smith', [ 'A Book!' ] );
var serializedString = author.serialize();
