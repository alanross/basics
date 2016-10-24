using namespace std;
#include <cstdio>
#include <iostream>
#include "MyObject.h"

MyObject::~MyObject()
{
	cout << "delete " << protectedInstanceVariable << "\n";
}

int MyObject::fnWithValue( int val )
{
	return val+1;
}

void MyObject::fnWithReference( int *val )
{
	// changes the value of val outside of function
	*val += 1;
}

void MyObject::fnWithReferenceAlternate( int &val)
{
	// changes the value of val outside of function - alternate notation
	val += 1;
}

// argc: number of arguments, argv: array of strings
// argv[0] is the program name, argv[1] through argv[argc-1] are command-line input
/*int main(int argc, char *argv[])
{
	bool myBoolean = true;							// printf("%s",(myBoolean)?"true":"false");
	int myInt = 1;									// printf("%d", myInt );
	long int myLongInt = 3;							// printf("%ld", myLongInt );
	float myFloat = 3.33333;						// printf("%.1f", myFloat ); //eine komma stelle
	double myDouble = 3.33333333333333;				// printf("%.9f", myDouble );
	long double myLongDouble = 3.33333333333333333;	// printf("%Lf", myLongDouble );
	int myHex = 0x336699FF;		myHex is h =>	// printf("h: %X-%X-%X-%X", (h>>24)&0xff, (h>>16)&0xff, (h>>8)&0xff, h&0xff );

	const float PI_02 = 3.14159;

	char myChar = 'a';								// printf("%c", myChar );
	char* myString = "a string";					// printf("%s", myString );

	char myString2[20];								// create char array with 20 items
	strcpy(myString2, "MyObject World");
	myString2[0] = 'H';
	myString2[1] = 'i';
	myString2[2] = '\0';							// limit

	cout << "cout: " << myInt << ", " << PI_02 << ", " << myBoolean << ", " << myString2<< endl;

	MyObject hello = MyObject( (char*)"MyObject" );			//stack allocation, no need to delete
	hello.fnWithValue( 1 );							// returns '2'

	MyObject *helloPtr;								//heap allocation, must delete
	helloPtr = new MyObject( (char*)"MyObjectPtr" );
	myInt = helloPtr->fnWithValue( myInt );			//leaves val, returns new value '2'
	helloPtr->fnWithReference( &myInt );			//modifies val: -> val = 3;
	helloPtr->fnWithReferenceAlternate( myInt ); 	//modifies val: -> val = 4;
	delete helloPtr;

	return 0;
}*/
