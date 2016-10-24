function AMath()
{
	this.f = [ -1, -1, -1, -1, -1, -1, -1, -1 ]; //initialized by -1
}

AMath.prototype.fibonacciRecursive = function( n )
{
	if( n <= 1 ) // Check for the base case.
	{
		return 1;
	}
	else // Perform the recursive case.
	{
		return ( this.fibonacciRecursive( n - 1 ) + this.fibonacciRecursive( n - 2 ) );
	}
};

AMath.prototype.fibonacciIterative = function( n )
{
	var f0 = 0;
	var f1 = 1;

	for( var i = 0; i <= n; i++ )
	{
		var tmp = f0;
		f0 = f1;
		f1 += tmp;
	}

	return f0;
};

AMath.prototype.fibonacciIterativeMemoizing = function( n )
{
	var f = this.f;

	if( n == 0 || n == 1 )
	{
		return 1;
	}
	if( f[ n - 1 ] == -1 )
	{
		f[ n - 1 ] = this.fibonacciIterativeMemoizing( n - 1 );
	}
	if( f[ n - 2 ] == -1 )
	{
		f[ n - 2 ] = this.fibonacciIterativeMemoizing( n - 2 );
	}
	return f[ n - 1 ] + f[ n - 2 ];
};


AMath.prototype.ggt = function( x, y )
{
	var teiler, a, b, z; // 6 Integer-Variablen
	a = x;
	b = y;
	teiler = x; // beginne mit einem teiler
	while( (x % teiler != 0) || (y % teiler != 0) ) // solange x nicht aufgeht // oder y nicht aufgeht
	{
		// probiere Naechstkleineren
		teiler--;
	}

	// solange a ungleich b
	while( a != b )
	{
		if( a > b )
		{
			a = a - b;
		} // subtrahiere die kleinere
		else
		{
			b = b - a;
		}
	} // Zahl von der groesseren

	while( y != 0 )
	{
		// solange y ungleich 0
		z = x % y; // ersetze x durch y
		x = y; // und y durch x modulo y
		y = z;
	}

	return x;
};

AMath.prototype.ggtRecursive = function( x, y )
{
	if( y == 0 )
	{
		return x;
	}
	else
	{
		return this.ggtRecursive( y, x % y );
	}
};

AMath.prototype.sqrt1 = function( num )
{
	var mid = num / 2;

	do
	{
		mid = ( mid + num / mid ) / 2.0;
	}
	while( mid * mid - num > 0.00001 );

	return mid;
};

AMath.prototype.sqrt2 = function( num )
{
	var lo = 0;
	var hi = 1e10;
	var mid = (lo + hi) / 2;

	while( Math.abs( mid * mid - num ) > 1e-9 )
	{
		if( mid * mid < num )
		{
			lo = mid + 1;
		}
		else
		{
			hi = mid - 1;
		}

		mid = ( lo + hi ) / 2;
	}

	return mid;
};


