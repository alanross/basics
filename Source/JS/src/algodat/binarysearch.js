function ABinarySearch()
{
	/**
	 * Worst case performance    O(log n)
	 * Best case performance    O(1)
	 * Average case performance    O(log n)
	 * Worst case space complexity
	 *
	 * Requires input array to be sorted!
	 */
	this.search = function( sortedArray, value, low, high )
	{
		if( high < low )
		{
			return -1;
		} // not found
	
		var mid = Math.floor( low + (high - low) / 2 );
	
		if( sortedArray[ mid ] > value )
		{
			return this.search( sortedArray, value, low, mid - 1 );
		}
		else if( sortedArray[ mid ] < value )
		{
			return this.search( sortedArray, value, mid + 1, high );
		}
		else
		{
			return mid;
		} // found
	};

	this.quickSort = function( array, left, right )
	{
		var i = left;
		var j = right;
		var p = array[ Math.round( left + (right - left) / 2 ) ];
	
		while( i <= j )
		{
			while( array[ i ] < p )
			{
				++i;
			}
	
			while( array[ j ] > p )
			{
				--j;
			}
	
			if( i <= j )
			{
				this.swap( array, i, j );
				++i;
				--j;
			}
		}
	
		if( left < j )
		{
			this.quickSort( array, left, j );
		}
		if( i < right )
		{
			this.quickSort( array, i, right );
		}
	};
	
	this.swap = function( array, i, j )
	{
		var tmp = array[ i ];
		array[ i ] = array[ j ];
		array[ j ] = tmp;
	};
	
}



