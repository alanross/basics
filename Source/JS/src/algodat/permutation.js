function APermutation()
{
	this.permute = function( array )
	{
		var result = [];

		this.permuteInternal( array, 0, result );

		return result.join( ", " );
	};
	
	this.permuteNonDuplicate = function( array )
	{
		var result = [];

		this.permuteNonDuplicateInternal( array, 0, result );

		return result.join( ", " );
	};

	/**
	 * performs the swapping operation twice. First time to generate all possible
	 * permutations of character at that level and second time to restore to the original string.
	 * http://n1b-algo.blogspot.com/2009/01/string-permutations.html
	 */
	this.permuteInternal = function( array, d /*should be 0 at first call*/, result )
	{
		if( d == array.length )
		{
			result.push( array.join( "" ) );
		}
		else
		{
			for( var i = d; i < array.length; i++ )
			{
				// swap the characters for permutation
				this.swap( array, i, d );

				this.permuteInternal( array, d + 1, result );

				// undo the swapping for parent call
				this.swap( array, i, d );
			}
		}
	};

	/**
	 * permute function will fail because we generate all permutations after the swapping step.
	 * Same character could get swapped to dth spot again, leading to redundant permutations.
	 *
	 * So:
	 * Use presorted input in alphabetical order!
	 * Then in function ensure that permutations for char are not done if char is same as previous char
	 */
	this.permuteNonDuplicateInternal = function( array /*char[]*/, d /*should be 0 at first call*/, result )
	{
		if( d == array.length )
		{
			result.push( array.join( "" ) );
		}
		else
		{
			var lastSwap = '\0';

			for( var i = d; i < array.length; ++i )
			{
				if( lastSwap == array[ i ] )
				{
					continue;
				}
				else
				{
					lastSwap = array[ i ];
				}

				// swap the characters for permutation
				this.swap( array, i, d );

				this.permuteNonDuplicateInternal( array, d + 1, result );

				// undo the swapping for parent call
				this.swap( array, i, d );
			}
		}
	};

	this.swap = function( array, i, j )
	{
		var tmp = array[ i ];
		array[ i ] = array[ j ];
		array[ j ] = tmp;
	};
}

