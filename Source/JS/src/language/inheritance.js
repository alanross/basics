Function.prototype.inheritsFrom = function( theParent )
{
	this.prototype = new theParent; 					// inheritance occur here
	this.prototype.constructor = this; 					// set constructor to class, not baseClass

	if( theParent.constructor == Function )            // Normal Inheritance
	{
		this.prototype.parent = theParent.prototype;
	}
	else                                                // Pure Virtual Inheritance
	{
		this.prototype.parent = theParent;
	}

	return this;
};

function A()
{
	this.var1 = ''; 		//public
	var var2 = '';			//can only be called in here

	//can only be called in here
	function fn1()
	{
		console.log( "fn1" );
	}

	//public
	this.fn2 = function()
	{
		fn1();
		console.log( "fn2" );
	};

	this.fn3 = function()
	{
		this.fn2();
		console.log( "fn3" );
	};
}

A.prototype.fn4 = function()
{
	this.fn3();
	console.log( "fn4" );
};

A.prototype.fn5 = function()
{
	this.fn4();
	this.var1 = 'hello';
	console.log( "fn5 " + this.var1 );
};

B.inheritsFrom( A );

function B()
{
}

B.prototype.fn5 = function()
{
	this.parent.fn5.call( this );
	console.log( "fn5b " + this.var1 );
};

function example()
{
	var a = new A();
	a.fn5();

	var b = new B();
	b.fn5();
}