#ifndef MYBASECLASS_H_				// Prevents multiple references
#define MYBASECLASS_H_

using namespace std;				// using namespace

#include <cstdio>
#include <iostream>

class MyBaseClass
{
public:								// Variables and functions accessible from anywhere
	MyBaseClass();
	MyBaseClass( char* className );
	virtual ~MyBaseClass();

	void printInfo()				//Child classes can override parent functions
	{
		printf("Info: %s", _className );
	}

protected:
	char* getClassName();

private:							//Variables and functions accessible only from within this class
	char* _className;
};

#endif // MYBASECLASS_H_
