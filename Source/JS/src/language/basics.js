function primitives()
{
	var number = 3; // Any number (int and float)
	var string = "Greetings!";
	var boolean = true;

	// ein Array mit 3 Feldern a[0], a[1] und a[2]
	var array1 = new Array( 3 );

	// ein Array mit 3 Feldern b[0] = 'a', b[1] = 'b' und b[2] ='c'
	var array2 = new Array( 'a', 'b', 'c' );

	// ein Array mit 3 Feldern c[0] = 'a', c[1] = 'b' und c[2] ='c'
	var array3 = [ 'a', 'b', 'c' ];

	array3.push( 9 ); // add as last
	array3.pop(); // remove last
	array3.unshift( 9 ); // add as first
	array3.shift(); // remove first
	array3.splice( 0, array3.length ); // empty

	var size = 4;
	var byteArray = new Uint8Array( size );
	byteArray[0] = 1;
	byteArray[1] = 1;
	byteArray[2] = 1;
	byteArray[3] = 1;

	function Array2D( x, y )
	{
		this.items = new Array( x );

		for( var i = 0; i < y; i++ )
		{
			this.items[ i ] = new Array( y );
		}
	}

	var array2d = new Array2D( 3, 3 );
	array2d.items[ 1 ][ 1 ] = 'hallo';

	// null -> (myString != null)
	// NaN -> isNaN()

	var object1 = new Object();
	object1[ "key1" ] = "Mueller";
	object1[ "key2" ] = "Hans";

	var object2 = {};
	object2.key1 = "Mueller";
	object2.key2 = "Hans";

	console.log( number + " " + string + " " + boolean + " " + array2 + " " + array2d.items[ 1 ][ 1 ] );
	console.log( object1 );
	console.log( object2 );
}

// ---------------------------------------------------------------
// Conversion
// conversion: http://www.jibbering.com/faq/notes/type-conversion/#tcBool
function conversion()
{
	var myNumber = Number( "3" );
	var myString = String( 3 );
	var myBoolean = Boolean( 1 );

	console.log( myNumber + " " + myString + " " + myBoolean );

	parseInt( "12.34" ); // returns 12
	parseFloat( "3.14 meters" ); // returns 3.14
	parseInt( "eleven" ); // returns NaN
	parseFloat( "72.74" ); // returns 72.74
	parseFloat( "$72.74" ); // returns NaN
}

// --------------------------------------------------------------------
// Scope
// http://robertnyman.com/2008/10/09/explaining-javascript-scope-and-closures/
function scope()
{
	var person = function()
	{
		// Private
		var _name = "Robert";
		// Public (working with closure)
		return {
			getName: function()
			{
				return _name;
			},
			setName: function( newName )
			{
				_name = newName;
			}
		};
	}();

	// var person = new Person() //not possible
	console.log( person._name ); // Undefined
	console.log( person.getName() ); // "Robert"
	person.setName( "Robert Nyman" );
	console.log( person.getName() ); // "Robert Nyman"
}

// http://robertnyman.com/2008/10/09/explaining-javascript-scope-and-closures/
function closure()
{
	function add( x )
	{
		return function( y )
		{
			return x + y;
		};
	}

	var add5 = add( 5 );
	var no8 = add5( 3 );

	console.log( no8 ); // Returns 8
}

// http://jqfundamentals.com/#chapter-2
function closure2()
{
	// Example 2.49: How to lock in the value of i?
	// this won't behave as we want it to; every click will alert 5
	for( var i = 0; i < 5; i++ )
	{
		$( '<p>click me</p>' ).appendTo( 'body' ).click( function()
		{
			alert( i );
		} );
	}

	// Example 2.50: Locking in the value of i with a closure
	// fix: �close� the value of i inside createFunction, so it won't change
	var createFunction = function( i )
	{
		return function()
		{
			alert( i );
		};
	};

	for( var i = 0; i < 5; i++ )
	{
		$( '<p>click me</p>' ).appendTo( 'body' ).click( createFunction( i ) );
	}
}

function comparison( x, y )
{
	var result;

	// two numbers
	if( isNaN( x ) == false && isNaN( y ) == false )
	{
		result = x - y;
	}

	// number and string
	else if( isNaN( x ) == false && isNaN( y ) == true )
	{
		result = -1;
	}
	else if( isNaN( y ) == false && isNaN( x ) == true )
	{
		result = 1;
	}

	// two strings
	else if( x.toLowerCase() < y.toLowerCase() )
	{
		result = -1;
	}
	else if( y.toLowerCase() < x.toLowerCase() )
	{
		result = 1;
	}

	// two identical strings
	else if( y.toLowerCase() == x.toLowerCase() )
	{
		if( x < y )
		{
			result = -1;
		}
		else if( y < x )
		{
			result = 1;
		}
		else
		{
			result = 0;
		}
	}
	else
	{
		result = 0;
	}

	return result;
}

function attributes()
{
	var MyClass = function()
	{
		this.attr1 = 'hello';
		this.attr2 = 'world';
		this.attr3 = 42;
	};

	var obj = new MyClass();
	for( n in obj )
	{
		console.log( "Name: " + n + ", Type: " + typeof n );
	}

	console.log( obj[ 'attr2' ] );
}
