// Super class --------------------------------------------------------------------
function Person( name )
{
	this.name = name;
}

Person.prototype.getName = function()
{
	return this.name;
};

// Sub class, version 1 -----------------------------------------------------------
function extend( subClass, superClass )
{
	var F = function()
	{
	};
	F.prototype = superClass.prototype;
	subClass.prototype = new F();
	subClass.prototype.constructor = subClass;
}

function Author1( name, books )
{
	Person.call( this, name );
	this.books = books;
}

extend( Author1, Person );

Author1.prototype.getBooks = function()
{
	return this.books;
};

// usage:
var reader = new Person( 'John Smith' );
reader.getName();

var author = new Author1( 'Jane Smith', ['book A', 'book B'] );
author.getName();
author.getBooks();
//--------------------------------------------------------------------

// Sub class, version 2, with access to super class -------------------
function extendComplex( subClass, superClass )
{
	var F = function()
	{
	};

	F.prototype = superClass.prototype;

	subClass.prototype = new F();
	subClass.prototype.constructor = subClass;

	subClass.superclass = superClass.prototype;

	if( superClass.prototype.constructor == Object.prototype.constructor )
	{
		superClass.prototype.constructor = superClass;
	}
}

function Author2( name, books )
{
	Author.superclass.constructor.call( this, name );
	this.books = books;
}

extendComplex( Author2, Person );

Author2.prototype.getBooks = function()
{
	return this.books;
};

Author2.prototype.getName = function()
{
	var name = Author.superclass.getName.call( this );
	return name + ', Author of ' + this.getBooks().join( ', ' );
};
//--------------------------------------------------------------------

// Sub class, version 3, with prototype chain -------------------------
function Author3( name, books )
{
	Person.call( this, name ); // Call the superclass' constructor in the scope of this.
	this.books = books; // Add an attribute to Author.
}

Author3.prototype = new Person(); // Set up the prototype chain.
Author3.prototype.constructor = Author3; // Set the constructor attribute to Author.
Author3.prototype.getBooks = function()
{ // Add a method to Author.
	return this.books;
};
//--------------------------------------------------------------------
