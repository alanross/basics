var LinkedListNode = function( data, next )
{
	this.data = data;
	this.next = next;

	this.toString = function()
	{
		return this.data;
	};
};

LinkedList = function()
{
	var _head = new LinkedListNode( null, null );
	var _length = 0;

	this.toString = function()
	{
		var cur = _head;
		var result = [];

		while( cur != null )
		{
			result.push( cur.toString() );

			cur = cur.next;
		}

		return result.join(",");
	};
	
	this.append = function( data )
	{
		if( _head.data == null )
		{
			_head = new LinkedListNode( data, null );
		}
		else
		{
			var cur = _head;
			
			while( cur.next != null )
			{
				cur = cur.next;
			}

			var node = new LinkedListNode( data, null );
			cur.next = node;
		}
		
		_length += 1;
	};
	
	this.prepend = function( data )
	{
		if( _head.data == null )
		{
			_head = new LinkedListNode( data, null );
		}
		else
		{
			var node = new LinkedListNode( data, _head );
			
			_head = node;
		}
		_length += 1;
	};
	
	this.getHead = function()
	{
		return _head;
	};
	
	this.get = function( index )
	{
		if( index < _length )
		{
			var cur = _head;

			for( var i = 0; i < index; i++ )
			{
				cur = cur.next;
			}

			return cur;
		}
		else
		{
			return "you asked for an element outside the list";
		}
	};

	this.has = function( data )
	{
		var node = _head;

		while( node != null && node.data != data )
		{
			node = node.next;
		}

		return node;
	};
	
	this.reverse = function()
	{
		var node = _head;
		var prev = null;
		var curr = _head;
	
		while( curr != null )
		{
			node = node.next;
			curr.next = prev;
			prev = curr;
			curr = node;
		}

		_head = prev;
	};
	
	this.reverseRecursive = function( curr, prev )
	{
		if( curr == null )
		{
			return prev;
		}
	
		var temp = curr.next;
		curr.next = prev;
		return this.reverseRecursive( temp, curr );
	};
	
	this.hasCycle = function( head )
	{
		var fast = head;
		var slow = head;
	
		while( true )
		{
			if( fast == null || fast.next == null )
			{
				return false;
			}
			else if( fast == slow || fast.next == slow )
			{
				return true;
			}
			else
			{
				fast = fast.next.next;
				slow = slow.next;
			}
		}
	};
	
	this.remove = function( data )
	{
		//front of the list
		if( _head.data == data )
		{
			var curr = _head;
			curr = curr.next;
			_head = curr;
			return true;
		}
		else
		{
			var curr = _head;
			var prev = _head;
			var counter = 0;
			while( curr.data != data )
			{
				if( counter < _length )
				{
					if( counter > 0 )
					{
						prev = prev.next;
					}
					curr = curr.next;
					counter += 1;
				}
				else
				{
					return false;
				}
			}//assumes element was found

			//if element was last in the list.
			if( counter == _length - 1 )
			{
				prev.next = null;
				delete curr;
				return true;
			}
			else
			{ // somewhere in the middle
				curr = curr.next;
				prev.next = curr;
				return true;
			}
		}
	};
};



/**
 * The list node
 */
function AListNode()
{
	this.next = null;
	this.data = '';
}

AListNode.prototype.toString = function()
{
	return this.data;
};

/**
 * The list
 */
function AList()
{
	var head = null;

	head = this.build( head );

	this.debug( head );

	// head = this.reverse( head );

	head = this.reverseRecursive( head, null );

	this.debug( head );

	this.build = function( head )
	{
		var t;
		t = head = new AListNode();

		var n = 5;

		while( --n > -1 )
		{
			t.data = "" + n;
			t = t.next = new AListNode();
		}

		return head;
	};

	this.reverse = function( p )
	{
		var prev, curr;
		prev = null;
		curr = p;

		while( curr != null )
		{
			p = p.next;
			curr.next = prev;
			prev = curr;
			curr = p;
		}
		return (prev);
	};

	this.reverseRecursive = function( curr, prev )
	{
		if( curr == null )
		{
			return prev;
		}

		var temp = curr.next;
		curr.next = prev;
		return this.reverseRecursive( temp, curr );
	};

	this.hasCycle = function( head )
	{
		var fast = head;
		var slow = head;

		while( true )
		{
			if( fast == null || fast.next == null )
			{
				return false;
			}
			else if( fast == slow || fast.next == slow )
			{
				return true;
			}
			else
			{
				fast = fast.next.next;
				slow = slow.next;
			}
		}
	};

	this.search = function( head, data )
	{
		while( head != null && head.data != data )
		{
			head = head.next;
		}

		return head;
	};

	this.debug = function( head )
	{
		var t = head;
		while( t != null )
		{
			console.log( t.data );
			t = t.next;
		}
	};
}
