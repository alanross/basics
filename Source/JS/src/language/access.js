//http://phrogz.net/JS/Classes/OOPinJS.html
//http://dean.edwards.name/weblog/2006/03/base/
function Clazz( property )
{
	this.constructor.counter++;

	// Private variables and functions only privileged methods may view/edit/invoke
	var privateVar = ( Math.random() * 100).toFixed( 1 );

	// public properties -- anyone may read/write
	this.publicProperty = "public";

	function privateFunction()
	{
		return privateVar;
	}

	// privileged methods may be invoked publicly and may access private items
	// may not be changed; may be replaced with public flavors
	this.privilegedFunction1 = function()
	{
		return privateVar + privateFunction();
	};

	this.privilegedFunction2 = function()
	{
		return this.privilegedFunction1();
	};

	this.getProperty = function()
	{
		return property;
	};
}

//public methods -- anyone may read/write
Clazz.prototype.publicFunction = function()
{
	this.something2 = "AAA";
};

//prototype properties -- anyone may read/write (but may be overridden)
Clazz.prototype.prototypeProperties = 2;

//static properties -- anyone may read/write
Clazz.counter = 0;


function example()
{
	var c1 = new Clazz( "Gavin" );
	var c2 = new Clazz( "Lisa" );

	console.log( Clazz.counter );

	console.log( c1.privilegedFunction2() );
	console.log( c2.privilegedFunction2() );


	c1.publicFunction();
	c1.something2 = "BBB"; // direct access to the variable set in publicFunction

	//sets a public variable, but would not overwrite a private 'something' variable.
	c1.something = "something";

	// add another function
	Clazz.prototype.anotherPublicFunction = function()
	{
	};

	// overwrite publicFunction
	c1.publicFunction = function()
	{
	};
}