//------------------------------------------- VERSION Just functions
function startAnimation()
{
}

function stopAnimation()
{
}


//------------------------------------------- VERSION A
var VersionA = function()
{
};

VersionA.prototype.start = function()
{
};

VersionA.prototype.stop = function()
{
};

/* Usage. */
var a = new VersionA();
a.start();
a.stop();


//------------------------------------------- VERSION B
var VersionB = function()
{
};

VersionB.prototype = {
	start: function()
	{
	},
	stop: function()
	{
	}
};

//------------------------------------------- VERSION C

// Add a method to the Function class that can
// be used to declare methods
Function.prototype.method = function( name, fn )
{
	this.prototype[ name ] = fn;
};

var VersionC = function()
{
};

VersionC.method( 'start', function()
{
} );

VersionC.method( 'stop', function()
{
} );


//------------------------------------------- VERSION D
// This version is like version C bu also allows
// the calls to be chained.
Function.prototype.method = function( name, fn )
{
	this.prototype[ name ] = fn;
	return this;
};

var VersionD = function()
{
};

VersionD.method( 'start', function()
{
} ).method( 'stop', function()
{
} );
