#ifndef MYFUNCTIONS_H_
#define MYFUNCTIONS_H_

class Functions
{
public:
	Functions();
	virtual ~Functions();
	int functionPassByValue( int val );
	void functionPassByReference( int *val );
	void functionPassByReferenceAlternate( int &val);

};

#endif /* MYFUNCTIONS_H_ */
