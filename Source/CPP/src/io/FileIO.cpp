#include "FileIO.h"

using namespace std;
#include <cstdio>
#include <iostream>

FileIO::FileIO()
{
}

FileIO::~FileIO()
{
}


void FileIO::consoleIO()
{
	char* str01 = "hallo";
	char* str02; //ERROR if set at beginning when reading input later!
	char str03[30];

	cout << str01 << str01 << '\n';
	//cin >> string; //geht nicht mit CHAR*

	gets(str02); //u need #include <cstdio> for this
	puts(str02); //u need #include <cstdio> for this
	//cin.getline(str02,80,'\n');  //don't read more than 80 CHARS
	//cin.getline(str02,20);       //don't read more than 20 LINES

	//scanf("%s", &str03);//!!!stops reading after space/tap etc!
	//printf("%s", str03);
}

void FileIO::writeToFile()
{
	//#include <cstdio> for all of this

	short n;
	FILE* stream;

	stream = fopen("FileIOOutput.txt", "w");//"w" create if not exist, else overwrite

	fprintf(stream, "/**NumberTable*/\n\n");
	fprintf(stream, "decimal:\t octal:\t hexadecimal:\n");

	for (n = 0; n < 256; n++)
	{
		fprintf(stream, "%3d\t\t %2o\t\t %2x \n", n, n, n);
	}

	fclose(stream);
}

void FileIO::readFromFile()
{
	//#include <cstdio> for all of this

	char n;
	FILE* stream;

	stream = fopen("FileIOOutput.txt", "r");

	while ( (n = getc(stream)) != EOF )//EOF = end of file
	{
		printf("%c", n);
	}

	fclose(stream);
}
