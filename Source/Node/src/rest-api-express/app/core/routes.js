exports = module.exports = function( server, express )
{
	/**
	 * GET     http://localhost:3000/api
	 * GET     http://localhost:3000/api/articles
	 * POST    http://localhost:3000/api/articles               data = {title: "hello world"}
	 * GET     http://localhost:3000/api/articles/article_id
	 * PUT     http://localhost:3000/api/articles/article_id    data = {title: "hello world again"}
	 * DELETE  http://localhost:3000/api/articles/article_id
	 */

	var mongoose = require( 'mongoose' );
	var Article = mongoose.model( "Article" );

	// create our router
	var router = express.Router();

	// middleware to use for all requests
	router.use( function( req, res, next )
	{
		console.log( 'For all routes.' );

		next();
	} );

	// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
	router.get( '/', function( req, res )
	{
		res.json( { message: 'hooray! welcome to our api!' } );
	} );

	// on routes that end in /articles
	router.route( '/articles' )

			.post( function( req, res )
			{
				var article = new Article();		// create a new instance of the Article model

				article.title = req.body.title;

				article.save( function( err )
				{
					if( err )
					{
						res.send( err );
					}

					res.json( { message: 'Article created!' } );
				} );
			} )

			.get( function( req, res )
			{
				Article.find( function( err, articles )
				{
					if( err )
					{
						res.send( err );
					}

					res.json( articles );
				} );
			} );

	// on routes that end in /articles/:article_id
	router.route( '/articles/:article_id' )

			.get( function( req, res )
			{
				Article.findById( req.params.article_id, function( err, article )
				{
					if( err )
					{
						res.send( err );
					}
					res.json( article );
				} );
			} )

			.put( function( req, res )
			{
				Article.findById( req.params.article_id, function( err, article )
				{
					if( err )
					{
						res.send( err );
					}

					article.title = req.body.title;

					article.save( function( err )
					{
						if( err )
						{
							res.send( err );
						}

						res.json( { message: 'Article updated!' } );
					} );

				} );
			} )

			.delete( function( req, res )
			{
				Article.remove( { _id: req.params.article_id }, function( err, article )
				{
					if( err )
					{
						res.send( err );
					}

					res.json( { message: 'Successfully deleted' } );
				} );
			} );

	server.use( '/api', router );
};
