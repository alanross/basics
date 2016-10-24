function AArray()
{
}

/**
 * a = {1, 3, 6}
 * b = {2, 4, 5, _, _, _}
 * sortedArray = {1, 2, 3, 4, 5, 6}
 *
 * This seems like a sub-problem in mergesort, and it is, but with a twist.
 * The first reaction is to go from left to right and swap so that the smallest
 * elements are at the beginning of array2 and the bigger elements are in array1,
 * then combining array1 into the end of array2.
 *
 * However, there’s an easier way if you go from right to left. Since you know
 * that the two arrays are already sorted, start at index n-1 for both arrays
 * and compare from there, placing the larger of the two at the end of array2
 * and moving left as you progress.
 *
 * The hardest part is figuring out when and how to stop the loop. Once you
 * work backwards and reach the first element of one of the arrays, then
 * just copy the elements from the other array in reverse order to finish.
 */
AArray.prototype.merge = function( a /*int[]*/, b /*int[]*/ )
{
	var aIndex = a.length - 1;
	var bIndex = a.length - 1;
	var cIndex = b.length - 1;

	while( aIndex >= 0 && bIndex >= 0 )
	{
		if( a[ aIndex ] > b[ bIndex ] )
		{
			b[ cIndex-- ] = a[ aIndex-- ];
		}
		else
		{
			b[ cIndex-- ] = b[ bIndex-- ];
		}
	}

	while( aIndex >= 0 )
	{
		b[ cIndex-- ] = a[ aIndex-- ];
	}

	while( bIndex >= 0 )
	{
		b[ cIndex-- ] = b[ bIndex-- ];
	}

	return b;
};

/**
 * Reverse the array
 */
AArray.prototype.reverse = function( array )
{
	var tmp;

	var start = 0;
	var end = array.length;

	while( start < end )
	{
		tmp = array[ start ];
		array[ start++ ] = array[ end ];
		array[ end-- ] = tmp;
	}

	return array;
};

/**
 * The modern version of the Fisher–Yates shuffle runs in O(n)
 */
AArray.prototype.shuffle1 = function( array /*char[]*/ )
{
	for( var i = array.length - 1; i > 0; --i )
	{
		//random number between 0 and i
		var j = Math.floor( Math.random() * i );
		//swap
		var tmp = array[ j ];
		array[ j ] = array[ i ];
		array[ i ] = tmp;
	}

	return array;
};

/**
 * Shuffle array of size n such that each element has 1/n probability to
 * remain in its original spot. The best solution has O(n) complexity.
 */
AArray.prototype.shuffle2 = function( array /*char[] */ )
{
	var size = array.length;

	for( var i = 0; i < size; ++i )
	{
		//random number between i and size
		//int j = i + (int)(Math.random() * ((size - i) /*+ 1 to include i<= rand <= size*/));

		//random number between 0 and size
		var j = Math.floor( (Math.random() * size) );

		if( j != i )
		{
			//swap
			var tmp = array[ j ];
			array[ j ] = array[ i ];
			array[ i ] = tmp;
		}
	}

	return array;
};
