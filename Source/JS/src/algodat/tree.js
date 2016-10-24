
ABinaryTree = function()
{
	var ATreeNode = function( val )
	{
		this.left = null;
		this.right = null;
		this.value = val;
	};

	var root = null;
	var result = [];

	this.insert = function( val )
	{
		if( root == null )
		{
			root = new ATreeNode( val );
		}
		else
		{
			internalInsert( root, val );
		}
	};

	function internalInsert( node, val )
	{
		if( val < node.value )
		{
			if( node.left == null )
			{
				node.left = new ATreeNode( val );
			}
			else
			{
				internalInsert( node.left, val );
			}
		}
		else if( val > node.value )
		{
			if( node.right == null )
			{
				node.right = new ATreeNode( val );
			}
			else
			{
				internalInsert( node.right, val );
			}
		}
		else
		{
			// val is already in tree
		}
	}

	this.traverse = function()
	{
		if( root == null )
		{
			result = [];
		}
		else
		{
			internalInOrder( root );
		}

		return result;
	};

	function internalInOrder( node )
	{
		if( node != null )
		{
			internalInOrder( node.left );
			result.push( node.value );
			internalInOrder( node.right );
		}
	}
};
