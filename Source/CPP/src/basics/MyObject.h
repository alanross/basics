#ifndef MY_OBJECT_H
#define MY_OBJECT_H

#include "MyAbstractObject.h"
#include "IMyObject.h"

class MyObject : public MyAbstractObject, public virtual IMyObject
{
public:
	MyObject( char* val ) : MyAbstractObject( val )
	{
		/*do something here instead of in .cpp*/
	}
	~MyObject();
	int fnWithValue( int val );
	void fnWithReference( int *val );
	void fnWithReferenceAlternate( int &val);
};

#endif
