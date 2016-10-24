var Bicycle = new Interface( 'Bicycle', [ 'assemble', 'getPrice' ] );

/* The BicycleDecorator abstract decorator class. */
var BicycleDecorator = function( bicycle )
{
	// implements Bicycle
	Interface.ensureImplements( bicycle, Bicycle );
	this.bicycle = bicycle;
};

BicycleDecorator.prototype = {
	assemble: function()
	{
		return this.bicycle.assemble();
	},
	getPrice: function()
	{
		return this.bicycle.getPrice();
	}
};


var AcmeComfortCruiser = function()
{
	// implements Bicycle ...
};

AcmeComfortCruiser.prototype = {
	assemble: function()
	{
	},
	getPrice: function()
	{
		return 399.00;
	}
};

var HeadlightDecorator = function( bicycle )
{
	// implements Bicycle

	// Call the superclass's constructor.
	this.superclass.constructor( bicycle );
};
extend( HeadlightDecorator, BicycleDecorator ); // Extend the superclass.
HeadlightDecorator.prototype.assemble = function()
{
	return this.bicycle.assemble() + ' Attach headlight to handlebars.';
};
HeadlightDecorator.prototype.getPrice = function()
{
	return this.bicycle.getPrice() + 15.00;
};


var TaillightDecorator = function( bicycle )
{
	// implements Bicycle

	// Call the superclass's constructor.
	this.superclass.constructor( bicycle );
};
extend( TaillightDecorator, BicycleDecorator ); // Extend the superclass.
TaillightDecorator.prototype.assemble = function()
{
	return this.bicycle.assemble() + ' Attach taillight to the seat post.';
};
TaillightDecorator.prototype.getPrice = function()
{
	return this.bicycle.getPrice() + 9.00;
};


/* Usage. */
var myBicycle = new AcmeComfortCruiser(); // Instantiate the bicycle.
alert( myBicycle.getPrice() ); // Returns 399.00

myBicycle = new TaillightDecorator( myBicycle ); // Decorate the bicycle object with a taillight.
alert( myBicycle.getPrice() ); // Now returns 408.00

myBicycle = new HeadlightDecorator( myBicycle ); // Decorate the bicycle object again, now with a headlight.
alert( myBicycle.getPrice() ); // Now returns 423.00


//Or a little simpler: --------------------------------------------------------------------
function upperCaseDecorator( func )
{
	return function()
	{
		return func.apply( this, arguments ).toUpperCase();
	}
}

function getDate()
{
	return (new Date()).toString();
}

getDateCaps = upperCaseDecorator( getDate );

alert( getDate() ); // Returns Wed Sep 26 2007 20:11:02 GMT-0700 (PDT)
alert( getDateCaps() ); // Returns WED SEP 26 2007 20:11:02 GMT-0700 (PDT)