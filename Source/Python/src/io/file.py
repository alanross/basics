file = open( "myfile.txt", "w" )

file.write( "hello world in the new file " )
file.write( "and another line" )
file.close( )

file = open( 'myfile.txt', 'r' )
print file.read( )
