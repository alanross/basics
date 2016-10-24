using namespace std;
#include <cstdio>
#include <iostream>

#include "Functions.h"

Functions::Functions()
{
	int val1 = 1;
	val1 = functionPassByValue( val1 );

	int val2 = 1;
	functionPassByReference( &val2 );

	int val3 = 1;
	functionPassByReferenceAlternate( val3 );

	printf("Functions val1: %d\n", val1 );
	printf("Functions val2: %d\n", val2 );
	printf("Functions val3: %d\n", val3 );
}

Functions::~Functions()
{
}

//Make a local copy of a & b
int Functions::functionPassByValue( int val )
{
	return val+11;
}

//Pass pointers that reference a & b.  Changes made to a or b will be reflected outside the add routine
void Functions::functionPassByReference( int *val )
{
	*val += 11;
}

//pass by reference Ð alternate notation
void Functions::functionPassByReferenceAlternate( int &val)
{
	val += 11;
}
