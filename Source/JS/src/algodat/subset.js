function ASubSet()
{
	/**
	 * If there are n objects than all 2^n subsets can be determined by
	 * iterating from 0 to 2*n and in each iteration by selecting the
	 * elements at the position having set bit in the counter. Like for given ex
	 * 111--{1,2,3}
	 * 110--{2,3}
	 * 101--{1,3}
	 * 100--{3}
	 * 011--{2,3}
	 * 010--{2}
	 * 001--{1}
	 * 000--{}
	 */
	this.printAllSubsetsOfArray = function( stringArray )
	{
		var n = stringArray.length;
		var currentSubset = Math.round( Math.pow( 2.0, n ) - 1 ); //2^n -1 to remove empty set
		var tmp;

		var result = '';

		while( currentSubset > 0 )
		{
			result += "(";

			tmp = currentSubset;

			for( var i = 0; i < n; ++i )
			{
				if( ( tmp & 1 ) != 0 )
				{
					result += stringArray[ i ];
				}
				tmp >>= 1;
			}

			result += "), ";

			currentSubset--;
		}
		return result;
	};

	this.getSubsets = function( stringArray )
	{
		var n = stringArray.length;
		var currentSubset = Math.round( Math.pow( 2.0, n ) - 1 ); //2^n -1 to remove empty set
		var tmp;

		var results = [];

		while( currentSubset > 0 )
		{
			tmp = currentSubset;

			var subset = [];

			for( var i = 0; i < n; ++i )
			{
				if( ( tmp & 1 ) != 0 )
				{
					subset.push( stringArray[ i ] );
				}
				tmp >>= 1;
			}

			results.push( "(" + subset.join( ',' ) + ")" );

			currentSubset--;
		}

		return results;
	};
}


