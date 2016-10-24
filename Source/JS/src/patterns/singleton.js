var Singleton = {
	attribute: true,

	method: function()
	{

	}
};

// usage
Singleton.attribute1 = false;
var total = Singleton.attribute + 5;
var result = Singleton.method();


// lazy initialisation from here on
MyNamespace = {};

MyNamespace.Singleton = (function()
{
	var privateAttribute = false;

	function privateMethod( args )
	{
	}

	return {
		publicAttribute: true,

		publicMethod: function( args )
		{
		}
	};
})();

MyNamespace.Singleton = (function()
{
	function constructor()
	{
		var privateAttribute = false;

		function privateMethod( args )
		{
		}

		return {
			publicAttribute1: true,

			publicMethod: function( args )
			{
			}
		}
	}

})();

MyNamespace.Singleton = (function()
{
	function constructor()
	{
		// All of the normal singleton code goes here.
	}

	return {
		getInstance: function()
		{
			// Control code goes here.
		}
	}
})();

MyNamespace.Singleton = (function()
{
	var uniqueInstance;

	function constructor()
	{
		// All of the normal singleton code goes here.
	}

	return {
		getInstance: function()
		{
			if( !uniqueInstance )
			{
				// Instantiate only if the instance doesn't exist.
				uniqueInstance = constructor();
			}

			return uniqueInstance;
		}
	}
})();
