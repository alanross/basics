#ifndef ABSTRACT_MY_OBJECT_H
#define ABSTRACT_MY_OBJECT_H

class MyAbstractObject
{
public:
	MyAbstractObject( char* val )
	{
		/*do something here instead of in .cpp*/
		protectedInstanceVariable = val;
	}
	virtual ~MyAbstractObject();
protected:
	char* protectedInstanceVariable;
};

#endif
