//http://dean.edwards.name/weblog/2006/03/base/
//http://www.crockford.com/javascript/inheritance.html 
//http://phrogz.net/js/classes/OOPinJS2.html
//http://www.peterkropff.de/site/javascript/grundlagen_oop.htm
//http://javascript.jstruebig.de/javascript/792
//http://articles.sitepoint.com/article/oriented-programming-1
//http://phrogz.net/JS/Classes/OOPinJS2.html
//http://dean.edwards.name/weblog/2006/03/base/
function OOPExample()
{
	Function.prototype.inheritsFrom = function ( parentClassOrObject )
	{
		if( parentClassOrObject.constructor == Function )
		{
			//Normal Inheritance
			this.prototype = new parentClassOrObject;
			this.prototype.constructor = this;
			this.prototype.parent = parentClassOrObject.prototype;
		}
		else
		{
			//Pure Virtual Inheritance
			this.prototype = parentClassOrObject;
			this.prototype.constructor = this;
			this.prototype.parent = parentClassOrObject;
		}
		return this;
	};

	// 'Abstract'
	//var spirit = new LivingThing() would result in an error, since LivingThing is not a function
	LivingThing = {
		beBorn:function ()
		{
			this.alive = true;
		}
	};

	Animal.inheritsFrom( LivingThing );
	function Animal( name )
	{
		this.name = name;
		this.offspring = [];
	}

	Animal.prototype.haveABaby = function ()
	{
		//call super
		this.parent.beBorn.call( this );
		var newBaby = new this.constructor( "Baby " + this.name );
		this.offspring.push( newBaby );
		return newBaby;

		//var newBaby=new Animal("Baby "+this.name);
		//this.offspring.push(newBaby);
		//return newBaby;
	};

	Animal.prototype.toString = function ()
	{
		return '[Animal "' + this.name + '"]';
	};


	//Cat.prototype = new Animal();        // Here's where the inheritance occurs
	//Cat.prototype.constructor=Cat;       // Otherwise instances of Cat would have a constructor of Animal

	Cat.inheritsFrom( Animal );
	function Cat( name )
	{
		this.name = name;
	}

	//override
	Cat.prototype.haveABaby = function ()
	{
		var theKitten = this.parent.haveABaby.call( this );
		console.log( name + "have a kitten!" );
		return theKitten;
	};

	//override
	Cat.prototype.toString = function ()
	{
		return '[Cat "' + this.name + '"]';
	};


	var someAnimal = new Animal( 'Mr. Biggles' );
	var myCat = new Cat( 'Felix' );
	var myKitten = myCat.haveABaby(); // mew!
	console.log( 'someAnimal is ' + someAnimal );   // results in 'someAnimal is [Animal "Mr. Biggles"]'
	console.log( 'myCat is ' + myCat );             // results in 'myPet is [Cat "Felix"]'
	console.log( 'myKitten is ' + myKitten );             // results in

	console.log( myCat.offspring.length );        // shows that the cat has one baby now
	console.log( myCat.offspring[0] );            // results in '[Animal "Baby Felix"]'


//  Creating an object, constructor version
	function myObject1()
	{
		this.iAm = 'an object';
		this.whatAmI = function ()
		{
			alert( 'I am ' + this.iAm );
		};
	}

//  Creating an object, literal version
	var myObject2 = {
		iAm:'an object',
		whatAmI:function ()
		{
			alert( 'I am ' + this.iAm );
		}
	};


//  var myNewObject = new myObject1();  
//  myNewObject.whatAmI(); 


}



