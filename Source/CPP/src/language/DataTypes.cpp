using namespace std;
#include <cstdio>
#include <iostream>

#include "DataTypes.h"


//a constant:
#define PI_01 3.14159

DataTypes::DataTypes()
{
	// common simple datatypes

	bool myBoolean = true;

	char myChar = 'a';
	char* myString = "a string";
	char myShortString[5] = "five";


	char myString2[20];
	strcpy(myString2, "Hello World");
	myString2[0] = 'H';
	myString2[1] = 'i';
	myString2[2] = '\0';


	int myInt = 3;
	long int myLongInt = 3;
	float myFloat = 3.33333;
	double myDouble = 3.33333333333333;
	long double myLongDouble = 3.33333333333333333;
	int myHex = 0x336699FF;

	const float PI_02 = 3.14159;


	//http://www.cplusplus.com/reference/clibrary/cstdio/printf/
	printf("myBoolean: %s \n",(myBoolean)?"true":"false");
	printf("myChar: %c\n", myChar );
	printf("myString: %s\n", myString );
	printf("myString2: %s\n", myString2); //output hi
	printf("myShortString: %s\n", myShortString );
	printf("myInt: %d\n", myInt );
	printf("myLongInt: %ld\n", myLongInt );
	printf("myFloat: %.1f\n", myFloat );
	printf("myDouble: %.9f\n", myDouble );
	printf("myLong: %Lf\n", myLongDouble );
	printf("myHex: %X-%X-%X-%X\n", (myHex>>24)&0xff, (myHex>>16)&0xff, (myHex>>8)&0xff, myHex&0xff );

	cout << "using cout: " << myInt << ", " << myFloat << ", " << PI_02 << ", " << myBoolean << endl;
}

DataTypes::~DataTypes()
{
}

// basic control functions
void DataTypes::controlStructures()
{
	short a = 10;
	short b = 9;
	if (a == 10)
	{
		b = 3;
	}
	else
	{
		a = b;
	}

	char input = 'e';
	switch (input)
	{
	case 'e':
		cout << "exit";
	case 's':
		cout << "someThingElse...";
	default:
		break;
	}

	for (int i = 0; i < 10; i++)
	{
	}

	//for( ; ; ){} goes on fore ever -> place break; in loop to end

	int k = 0;
	while (k < 10)
	{
		k++;
	}

	int j = 3;
	do
	{
		cout << "doing once even though j is to small!";
	}
	while (j > 4);
}


/*
 this should show the all sorts of operands,
 sorry, don#t understand some of them ;-(
 */
void DataTypes::operands()
{
	//OPERATORS             MEANING
	//   +                  addition
	//   -                  subtraction
	//   *                  multiplication
	//   /                  division
	//   %                  modulo

	//COMPARE-OPERATORS     MEANING
	//   <                  smaller
	//   >                  bigger
	//   <=                 smaller or same
	//   >=                 biggers or same
	//   ==                 same
	//   !=                 not same
	//
	//LOGICAL-OPERATORS     MEANING
	//   &
	//   |
	//   ^
	//   <<
	//   >>
	//   ~
	//   &&                 AND
	//   ||                 OR
	//   !                  NOT
	//
	//DEFINING-OPERATORS    MEANING
	//   =                  normal definition
	//   +=                 defintion after addition
	//   -=                 ... after subtraction
	//   *=                 ... after multiplication
	//   /=                 ... after division
	//   %=                 ... after modulo
	//   <<=
	//   >>=
	//   &=
	//   |=
	//   ^=
	//
	//POST/PREFIX-OPERATORS MEANING
	//   ++                 increment
	//   --                 decrement
	//   ()                 calling function
	//   []                 array element
	//   .                  field of a scructur or union
	//   ->                 pointer to a sctructur
	//   (type)             typecast
	//
	//POINTER-OPERATORS     MEANING
	//   &                  adress of
	//   *                  indirection
	//   .*                 de-reference pointer
	//   ->*                de-reference pointer
}

