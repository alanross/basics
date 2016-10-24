#include "Image.h"

Image::Image(int w, int h, char* name ): MyBaseClass( name )
{
	printf("Image create %s\n", name);

	_width = w;
	_height = h;
	_data = new int[w*h];
}

Image::Image(Image *img): MyBaseClass( img->getClassName() )
{
	printf("Image create %s\n",img->getClassName());

	_width = img->getWidth();
	_height = img->getHeight();

	_data = new int[ _width*_height ];

	for( int i = 0; i<_width*_height; i++ )
	{
		_data[i] = img->getData()[i];
	}
}


Image::~Image()
{
	printf("Image destroy %s\n",getClassName());

	if ( _data != NULL )
		delete _data;
}

void Image::SetAllPixels( int color )
{
	int numPixels = _width*_height;

	for (int i = 0; i < numPixels; i++)
	{
		_data[i] = color;
	}
}
