var Bicycle = new Interface( 'Bicycle', [ 'assemble', 'wash' ] );

var BikeA = function()
{
	// implements Bicycle
};
BikeA.prototype = {
	assemble: function()
	{
	},
	wash: function()
	{
	}
};

var BikeB = function()
{
	// implements Bicycle
};
BikeB.prototype = {
	assemble: function()
	{
	},
	wash: function()
	{
	}
};

var BicycleShop = function()
{
};
BicycleShop.prototype = {
	sellBicycle: function( model )
	{
		var bicycle = BicycleFactory.createBicycle( model );

		bicycle.assemble();
		bicycle.wash();

		return bicycle;
	}
};

var BicycleFactory = {
	createBicycle: function( model )
	{
		var bicycle;

		switch( model )
		{
			case 'BikeA':
				bicycle = new BikeA();
				break;
			default:
				bicycle = new BikeB();
		}

		Interface.ensureImplements( bicycle, Bicycle );

		return bicycle;
	}
};

/* Usage. */
var californiaCruisers = new BicycleShop();
var bike = californiaCruisers.sellBicycle( 'BikeA' );
