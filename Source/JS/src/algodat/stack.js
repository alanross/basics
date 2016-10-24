AStack = function()
{
	var _list = [];
	var _length = 0;

	this.push = function( value )
	{
		_length++;
		_list.push( value );
	};

	this.pop = function()
	{
		// Don't do anything if we don't have any items.
		if( _length === 0 )
		{
			return;
		}

		// Pop the last item off the end of the list and return the value.
		_length--;
		return _list.pop();
	};

	this.peek = function()
	{
		// Return the last item in "items" without removing it.
		return _list[ _length - 1 ];
	};
};