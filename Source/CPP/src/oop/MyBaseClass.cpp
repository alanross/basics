#include "MyBaseClass.h"

/*
 * Constructor without parameters
 */
MyBaseClass::MyBaseClass()
{
	_className = (char*)"MyBaseClass";

	printf("BaseClass create %s\n", _className );
}

/*
 * Constructor with parameter
 */
MyBaseClass::MyBaseClass( char* className )
{
	_className = className;

	printf("BaseClass create %s\n", _className );
}

/*
 * Destructor: Called whenever an instance is deleted
 */
MyBaseClass::~MyBaseClass()
{
	printf("BaseClass destroy\n" );

	//if( _className != NULL )
	//	delete _className;
}

/*
 * Return the class name
 */
char* MyBaseClass::getClassName()
{
	return _className;
}



