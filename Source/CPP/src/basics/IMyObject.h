#ifndef I_MY_OBJECT_H
#define I_MY_OBJECT_H


class IMyObject
{
public:
 	// "=0" part makes this method pure virtual, and also makes this class abstract.
    virtual int fnPassByValue( int val ) = 0;
    virtual void fnPassByReference( int *val ) = 0;
    virtual void fnPassByReferenceAlternate( int &val) = 0;
};

#endif
