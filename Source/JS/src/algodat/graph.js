Array.prototype.contains = function( name )
{
	var i = this.length;

	while( i-- )
	{
		if( this[ i ].name === name )
		{
			return true;
		}
	}
	return false;
};

AGraphNode = function( name )
{
	this.edges = [];
	this.name = name;

	this.addEdge = function( end )
	{
		this.edges.push( end );
	}
};

AGraph = function()
{
	var _nodes = [];

	this.addEdge = function( start, end )
	{
		var first = _nodes.contains( start );
		var second = _nodes.contains( end );

		if( first )
		{
			//get start node
			var i = _nodes.length;

			while( i-- )
			{
				if( _nodes[ i ].name === start )
				{
					_nodes[ i ].addEdge( end );
					break;
				}
			}
		}

		if( second )
		{
			//get end node
			i = _nodes.length;

			while( i-- )
			{
				if( _nodes[ i ].name === end )
				{
					_nodes[ i ].addEdge( start );
					break;
				}
			}
		}

		if( (!first) || (!second) )
		{
			if( !first )
			{
				var node = new GraphNode( start );
				node.addEdge( end );
				_nodes.push( node );
			}
			if( !second )
			{
				var node = new GraphNode( end );
				node.addEdge( start );
				_nodes.push( node );
			}
		}
	};

	this.printNodes = function()
	{
		for( var i = 0; i < _nodes.length; i++ )
		{
			console.log( _nodes[ i ].name + ":", _nodes[ i ].edges.join( ", " ) );
		}
	};

	this.find = function( name )
	{
		// replace this with depth first etc search
		return _nodes.find( function( node )
		{
			return node.name === name;
		} );
	}
};