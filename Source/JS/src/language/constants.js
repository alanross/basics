var ClassA = (function()
{
	// Constants created as private static attributes.
	var UPPER_BOUND = 100;

	// Privileged static method.
	this.getUPPER_BOUND()
	{
		return UPPER_BOUND;
	}

	// Return the constructor.
	return function( constructorArgument )
	{
	}
})();



var ClassB = (function()
{
	// Private static attributes.
	var constants = {
		UPPER_BOUND: 100,
		LOWER_BOUND: -100
	};

	// Privileged static method.
	this.getConstant( name )
	{
		return constants[ name ];
	}

	// Return the constructor.
	return function( constructorArgument )
	{
	}
})();

// Usage
ClassA.getUPPER_BOUND();
ClassB.getConstant( 'UPPER_BOUND' );
