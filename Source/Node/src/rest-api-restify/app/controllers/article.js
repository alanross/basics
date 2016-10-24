var mongoose = require( 'mongoose' );
var Article = mongoose.model( "Article" );
var Comment = mongoose.model( "Comment" );
var ObjectId = mongoose.Types.ObjectId;

exports.createArticle = function( req, res, next )
{
	var article = new Article( req.body );

	article.save( function( err, article )
	{
		if( err )
		{
			res.status( 500 );
			res.json( { type: false, data: "Error occurred: " + err } );
		}
		else
		{
			res.json( { type: true, data: article } );
		}
	} )
};

exports.getArticle = function( req, res, next )
{
	Article.findById( new ObjectId( req.params.id ), function( err, article )
	{
		if( err )
		{
			res.status( 500 );
			res.json( { type: false, data: "Error occurred: " + err } );
		}
		else
		{
			if( article )
			{
				res.json( { type: true, data: article } );
			}
			else
			{
				res.json( { type: false, data: "Article: " + req.params.id + " not found" } );
			}
		}
	} )
};

exports.getArticle_v2 = function( req, res, next )
{
	Article.findById( new ObjectId( req.params.id ), function( err, article )
	{
		if( err )
		{
			res.status( 500 );
			res.json( { type: false, data: "Error occurred: " + err } );
		}
		else
		{
			if( article )
			{
				article.title = article.title + " v2";

				res.json( { type: true, data: article } );
			}
			else
			{
				res.json( { type: false, data: "Article: " + req.params.id + " not found" } );
			}
		}
	} )
};

exports.updateArticle = function( req, res, next )
{
	var updatedArticleModel = new Article( req.body );

	Article.findByIdAndUpdate( new ObjectId( req.params.id ), updatedArticleModel, function( err, article )
	{
		if( err )
		{
			res.status( 500 );
			res.json( { type: false, data: "Error occurred: " + err } );
		}
		else
		{
			if( article )
			{
				res.json( { type: true, data: article } );
			}
			else
			{
				res.json( { type: false, data: "Article: " + req.params.id + " not found" } );
			}
		}
	} )
};

exports.deleteArticle = function( req, res, next )
{
	Article.findByIdAndRemove( new Object( req.params.id ), function( err, article )
	{
		if( err )
		{
			res.status( 500 );
			res.json( { type: false, data: "Error occurred: " + err } );
		}
		else
		{
			res.json( { type: true, data: "Article: " + req.params.id + " deleted successfully" } );
		}
	} )
};

exports.createArticleComment = function( req, res, next )
{
	Article.findOne( { _id: new ObjectId( req.params.id ) }, function( err, article )
	{
		if( err )
		{
			res.json( { type: false, data: "Error occurred: " + err } );
		}
		else
		{
			if( article )
			{
				var commentModel = new Comment( req.body );
				article.comments.push( commentModel );
				article.save( function( err, result )
				{
					res.json( { type: true, data: result } );
				} );
			}
			else
			{
				res.json( { type: false, data: "Article: " + req.params.id + " not found" } );
			}
		}
	} )
};