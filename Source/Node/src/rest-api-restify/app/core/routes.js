exports = module.exports = function( server )
{
	var fs = require( 'fs' );

	var controllers = {};
	var controllers_path = process.cwd() + '/app/controllers';

	fs.readdirSync( controllers_path ).forEach( function( file )
	{
		if( file.indexOf( '.js' ) != -1 )
		{
			controllers[ file.split( '.' )[ 0 ] ] = require( controllers_path + '/' + file )
		}
	} );

	server.post( "/articles", controllers.article.createArticle );
	server.put( "/articles/:id", controllers.article.updateArticle );
	server.del( "/articles/:id", controllers.article.deleteArticle );
	server.get( { path: "/articles/:id", version: "1.0.0" }, controllers.article.getArticle );
	server.get( { path: "/articles/:id", version: "2.0.0" }, controllers.article.getArticle_v2 );

	server.put( "/articles/:id/comments", controllers.article.createArticleComment );

	server.put( "/comments/:id", controllers.comment.updateComment );
	server.del( "/comments/:id", controllers.comment.deleteComment );
	server.get( "/comments/:id", controllers.comment.getComment );
};


