#ifndef FILEIO_H
#define FILEIO_H

class FileIO
{
public:
	FileIO();
	virtual ~FileIO();
	void consoleIO();
	void writeToFile();
	void readFromFile();
};

#endif
