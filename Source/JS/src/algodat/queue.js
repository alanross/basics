AQueue = function()
{
	var _list = [];
	var _length = 0;

	this.enqueue = function( value )
	{
		_length++;
		_list.push( value );
	};

	this.dequeue = function()
	{
		// Don't do anything if we don't have any items.
		if( _length === 0 )
		{
			return;
		}

		// Shift the first item off the start of the list and return the value.
		_length--;

		return _list.shift();
	};

	this.peek = function()
	{
		return _list[ 0 ];
	}
};