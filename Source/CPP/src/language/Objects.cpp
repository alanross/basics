using namespace std;
#include <cstdio>
#include <iostream>

#include "Objects.h"

Objects::Objects()
{
}

Objects::~Objects()
{
}

void Objects::pointer()
{
	int *intPtr;			//Create a pointer

	intPtr = new int;		//Allocate memory

	*intPtr = 6837;			//Set value at given address

	// *intPtr ---> 6837
	// intPtr  ---> 0x0050 (memory address)

	delete intPtr;			//Deallocate memory

	int otherVal = 5;		//Change intPtr to point to
	intPtr = &otherVal;		//a new location

	// *intPtr ---> 5		// otherVal
	// intPtr  ---> 0x0054 the &otherVal memory adress
}

void Objects::stackAllocation()
{
	int intArray[10];
	intArray[0] = 6837;
}

void Objects::heapAllocation()
{
	int *intArray;
	intArray = new int[10];
	intArray[0] = 6837;

	//...

	delete[] intArray;
}
