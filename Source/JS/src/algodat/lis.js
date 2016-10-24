/**
 * Computes a and returns the result of a given equation given by a number of entries in an string array.
 *
 * @param tokens An array containing a set of string representations of basic math operations to be
 * carried out on values.
 * @return {Number} The result of the equation.
 */
function computeEquation( tokens )
{
	if( tokens == null || tokens.length == 0 || isNaN( tokens[ 0 ] ) )
	{
		console.log( "invalid input" );

		return 0;
	}

	var result = parseInt( tokens[ 0 ] );	// the initial value

	var n = tokens.length;

	for( var i = 1; i < n; ++i )
	{
		// convert add(1) to ["add", "1"]
		var task = tokens[ i ].replace( ")", "" ).split( "(" );

		var operation = task[ 0 ].toLocaleLowerCase();
		var value = parseInt( task[ 1 ] );

		switch( operation )
		{
			case "mult":
				result = Math.floor( result * value );
				break;
			case "div":
				result = Math.floor( result / value );
				break;
			case "add":
				result = Math.floor( result + value );
				break;
			case "sub":
				result = Math.floor( result - value );
				break;
			default :
				console.log( "invalid operation: " + operation );
		}
	}

	return result;
}

/**
 * Computes the sum of all elements contained the longest increasing sub-sequence (lis)
 * found in the given sequence.
 *
 * The Algorithm Design Manual, Steven Skiena
 * http://en.wikipedia.org/wiki/Longest_increasing_subsequence
 * http://stackoverflow.com/questions/2631726/how-to-determine-the-longest-increasing-subsequence-using-dynamic-programming
 * http://www.algorithmist.com/index.php/Longest_Increasing_Subsequence
 *
 * @param sequence The sequence of integer values to be processed.
 * @return {Number} The sum of the values contained in the lis.
 */
function computeLIS( sequence )
{
	if( sequence == null || sequence.length == 0 )
	{
		console.log( "invalid input" );

		return 0;
	}

	var n = sequence.length;
	var lis = new Array( n );	// list of lengths of each sub-sequence
	var sum = new Array( n );	// list of sums of each sub-sequence
	var sub = new Array( n );	// list of items in each sub-sequence (for debugging)

	var i;
	var j;
	var maxLis = 1;	// length of longest sub-sequence
	var maxSum = Number.MIN_VALUE;	//sum of longest sub-sequence

	for( i = 0; i < n; i++ )
	{
		lis[ i ] = 1;
		sum[ i ] = sequence[ i ];
		sub[ i ] = sequence[ i ] + "";
	}

	// Li = 1 + max{ Lj } where Si > Sj and 0 < j < i, else 1; L = lis, S = sequence
	for( i = 1; i < n; i++ )
	{
		for( j = 0; j < i; j++ )
		{
			if( sequence[ i ] > sequence[ j ] && lis[ i ] < lis[ j ] + 1 )
			{
				lis[ i ] = lis[ j ] + 1;

				sum[ i ] = sum[ j ] + sequence[ i ];

				sub[ i ] = sub[ j ] + "," + +sequence[ i ];

				if( maxLis < lis[ i ] )
				{
					maxLis = lis[ i ];
				}
			}
		}
	}

	for( i = 0; i < n; i++ )
	{
		console.log( "Length:" + lis[ i ] + "\tSum:" + sum[ i ] + "\tSeq:[" + sub[ i ] + "]" );

		if( maxLis == lis[ i ] )
		{
			if( maxSum < sum[ i ] )
			{
				maxSum = sum[ i ];
			}
		}
	}

	return maxSum;
}

/**
 * Test ComputeEquation function
 */
function testComputeEquation()
{
	var input = "1.add(1).sub(1).mult(4).div(2)"; // -> 2

	var result = computeEquation( input.split( "." ) );

	console.log( "computeEquation: Input:" + input + " -> Result:" + result );
}