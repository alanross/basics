function AString()
{
	/**
	 * remove all duplicate chars from string Hello World > Helo Wrd
	 */
	this.dedupe = function( str )
	{
		var A = new Array( 256 );
		var result = '';
		var input = str.split( '' );

		for( var i = 0; i < input.length; i++ )
		{
			var c = input[ i ];

			if( A[ c ] == null || isNaN( A[ c ] ) )
			{
				A[ c ] = 1;
				result += c;
			}
		}

		return result;
	};

	this.asciiToNumerical = function( ascii )                            // does not work
	{
		// 64 32 16 8 4 2 1 sum character
		// 1 0 0 1 0 1 0 74 J
		var value = 0;

		while( ascii != 0x0000 )
		{
			// ascii value 48-57 is 0-9, alles davor sind sonderzeichen, danach buchstaben
			value = (value * 10) + ((0xFF & ascii) - 48);
			// right shift 8 bits == /2/2/2/2/2/2/2/2
			ascii >>= 8;
		}

		return value;
	};

	this.reverseString = function( string )
	{
		return this.reverseArray( string.split( '' ), 0, string.length ).join( '' );
	};


	/**
	 * Reversing entire string is done in O(n)
	 */
	this.reverseArray = function( array, start, end )
	{
		while( start < end )
		{
			var tmp = array[ start ];
			array[ start++ ] = array[ end ];
			array[ end-- ] = tmp;
		}

		return array;
	};

	this.reverseWordsInSentence = function( str )
	{
		var reg = new RegExp( "[\\s]+", "i" );
		var words = str.split( reg );
		var result = '';

		var n = words.length;

		while( --n > -1 )
		{
			result += words[ n ] + " ";
		}

		return this.trim( result );
	};


	/**
	 * it's O(n). Reversing entire string is done in O(n),
	 * reversing each word in string is also O(n). O(n) + O(n) = O(n)
	 */
	this.reverseAllWords = function( str )
	{
		var input = str.split( '' );
		var start = 0;
		var end = input.length - 1;

		if( end <= 1 )
		{
			return str;
		}

		// First reverse the entire string
		input = this.reverseArray( input, 0, end );

		// Reverse each word in reversed sentence
		for( end = 0; end <= input.length; ++end )
		{
			if( end == input.length || input[ end ] == ' ' )
			{
				input = this.reverseArray( input, start, end - 1 );
				start = end + 1;
			}
		}

		return input.join( '' );
	};

	this.reverseStringTheBadWay = function( str )
	{
		var result = '';
		var n = str.length;
		var input = str.split( '' );

		while( --n > -1 )
		{
			result += input[ n ];
		}

		return result;
	};

	this.strtstr = function( needleInput, hayStackInput )
	{
		var needle = needleInput.split( '' );
		/*char[]*/
		var haystack = hayStackInput.split( '' );
		/*char[]*/
		var needleIndex = 0;

		for( var i = 0; i < hayStackInput.length; i++ )
		{
			if( needle[ needleIndex ] == haystack[ i ] )
			{
				needleIndex++;
			}
			else
			{
				i -= needleIndex;
				needleIndex = 0;
				continue;
			}

			if( needleIndex == needleInput.length )
			{
				return i - needleInput.length + 1;
			}
		}
		return -1;
	};

	this.decimalToRoman = function( decimalValue )
	{
		var roman = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ];
		var decimal = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
		var romanValue = "";

		for( var i = 0; i < 13; i++ )
		{
			while( decimalValue >= decimal[ i ] )
			{
				decimalValue -= decimal[ i ];
				romanValue += roman[ i ];
			}
		}
		return romanValue;
	};

	this.romanToDecimal = function( romanValue )
	{
		var c = romanValue.split( '' );
		/*char[]*/
		var decimalValue = 0;
		var n = romanValue.length - 1;

		for( var i = 0; i <= n; i++ )
		{
			if( i == n )
			{
				decimalValue += this.getIntFromRoman( c[ i ] );
			}
			else
			{
				var val = this.getIntFromRoman( c[ i ] );
				var nextVal = this.getIntFromRoman( c[ i + 1 ] );

				if( val < nextVal )
				{
					decimalValue -= val;
				}
				else
				{
					decimalValue += val;
				}
			}
		}

		return decimalValue;
	};

	this.getIntFromRoman = function( c /*char*/ )
	{
		var roman = [ 'M', 'D', 'C', 'L', 'X', 'V', 'I' ];
		var decimal = [ 1000, 500, 100, 50, 10, 5, 1 ];

		for( var j = 0; j < 8; ++j )
		{
			if( c == roman[ j ] )
			{
				return decimal[ j ];
			}
		}

		return 0;
	};

	//bubble sort
	this.bubbleSort = function( array /*char[]*/ )
	{
		var unsorted = true;

		while( unsorted )
		{
			unsorted = false;

			for( var i = 0; i < array.length - 1; ++i )
			{
				if( array[ i ] > array[ i + 1 ] )
				{
					this.swap( array, i, i + 1 );
					unsorted = true;
				}
			}
		}

		return array;
	};

	this.swap = function( array, i, j )
	{
		var tmp = array[ i ];
		array[ i ] = array[ j ];
		array[ j ] = tmp;
	};

	this.trim = function( str )
	{
		return str.replace( /^\s*/, "" ).replace( /\s*$/, "" );
	};

}

