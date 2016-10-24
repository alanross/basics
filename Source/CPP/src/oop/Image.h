#ifndef IMAGE_H_
#define IMAGE_H_

#include <assert.h> 		//Include a library file
#include "vector.h"			//Include a local file
#include "MyBaseClass.h"

class Image : public MyBaseClass
{
public:
	//it is possible to implement a function in the .h
	Image() : MyBaseClass((char*)"EmptyImage") //Call the parent constructor with parameter
	{
		printf("Image create %s\n",getClassName());

		_width = _height = 0;
		_data = NULL;
	}

	Image( int w, int h, char* name );
	Image(Image *img);
	~Image();

	//Overriding a virtual function from MyBaseClass
	void printInfo()
	{
		printf("Info: %s (%i,%i)\n", getClassName(), _width, _height );
	}

	void SetAllPixels( int color );
	int getWidth(){ return _width; }
	int getHeight(){ return _height; }
	int* getData(){ return _data; }

	// If a class instance is passed by reference, the copy constructor will be used to make a copy.
	// That is computationally expensive
	bool IsImageGreen(Image img){ return false; }
	// It’s much faster to pass by reference:
	bool IsImageGreen(Image *img){ return false; } //or
	bool IsImageGreen(Image &img){ return false; }

private:
	int _width;
	int _height;
	int *_data;
};

#endif // IMAGE_H_
