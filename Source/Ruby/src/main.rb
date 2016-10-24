# https://www.tutorialspoint.com/ruby/

#The more commonly used require method loads any given file only once
require_relative 'oop/classes'
require_relative 'basics/language'
require_relative 'basics/variables'

#require_relative 'io/console.rb'
#require_relative 'io/file.rb'

#The load method includes the named Ruby source file every time the method is executed
# load 'oop/classes.rb'

# Will search $LOAD_PATH for file. Notice the '/' which tells it to look in the 'test' folder for a file named 'unit.rb'
#require 'test/unit'

# Will look in current folder of file and search for subfolder 'my_folder' for the file 'my_file.rb'
#require_relative 'my_folder/my_file'


# The print statement is similar to the puts statement.
# The only difference is that the puts statement goes to the next line after printing the contents,
# whereas with the print statement the cursor is positioned on the same line.
puts "Hello world"
print "Servus!"

# Every Ruby source file can declare blocks of code to be run as the file is being
# loaded (the BEGIN blocks) and after the program has finished executing (the END blocks).
END {
  puts "Terminating Ruby Program"
}
BEGIN {
  puts "Initializing Ruby Program"
}


primitives
symbols
arrays
dictionaries
dateAndTime

