using namespace std;
#include <cstdio>
#include <iostream>

#include "Macros.h"


//macro, like function...
//Bed.operator ?:
//--> when (?) a > b then a , else (:) b   (= get maxValue)
#define max(in1,in2) (in1)>(in2)?(in1):(in2)

Macros::Macros()
{
	int maxValue = max(10,5);  //using the #define macro
}

Macros::~Macros()
{
}
