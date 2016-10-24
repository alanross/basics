ASorting = function()
{
	this.bubbleSort = function( array )
	{
		var unsorted = true;

		while( unsorted )
		{
			unsorted = false;

			for( var i = 0; i < array.length - 1; ++i )
			{
				if( array[ i ] > array[ i + 1 ] )
				{
					swap( array, i, i + 1 );

					unsorted = true;
				}
			}
		}

		return array;
	};

	this.quickSort = function( array )
	{
		quickSortInternal( array, 0, array.length - 1 );

		return array;
	};

	function quickSortInternal( array, left, right )
	{
		var i = left;
		var j = right;
		// Get the pivot element from the middle of the list
		// careful values can be 1.2, so round this is done by int in java!
		var pivot = array[ Math.round( left + (right - left) / 2 ) ];

		// Divide into two lists
		while( i <= j )
		{
			// If the current value from the left list is smaller then the pivot
			// element then get the next element from the left list
			while( array[ i ] < pivot )
			{
				i++;
			}
			// If the current value from the right list is larger then the pivot
			// element then get the next element from the right list
			while( array[ j ] > pivot )
			{
				j--;
			}

			// If we have found a value in the left list which is larger then
			// the pivot element and if we have found a value in the right list
			// which is smaller then the pivot element then we exchange the
			// values.
			// As we are done we can increase i and j
			if( i <= j )
			{
				swap( array, i, j );
				i++;
				j--;
			}
		}

		if( left < j )
		{
			quickSortInternal( array, left, j );
		}
		if( i < right )
		{
			quickSortInternal( array, i, right );
		}
	}

	this.mergeSort = function( array )
	{
		if( array.length < 2 )
		{
			return array;
		}

		var middle = parseInt( array.length / 2 );
		var left = array.slice( 0, middle );
		var right = array.slice( middle, array.length );

		return merge( this.mergeSort( left ), this.mergeSort( right ) );
	};

	function merge( left, right )
	{
		var result = [];

		while( left.length && right.length )
		{
			if( left[ 0 ] <= right[ 0 ] )
			{
				result.push( left.shift() );
			}
			else
			{
				result.push( right.shift() );
			}
		}

		while( left.length )
		{
			result.push( left.shift() );
		}

		while( right.length )
		{
			result.push( right.shift() );
		}

		return result;
	}

	function swap( array, i, j )
	{
		var tmp = array[ i ];
		array[ i ] = array[ j ];
		array[ j ] = tmp;
	}
};