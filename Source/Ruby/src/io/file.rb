# Create a new file and write to it  
File.open('myfile.txt', 'w') do |myFile1|
  # use "\n" for two lines of text  
  myFile1.puts "Hello World\nHow are you?"
end

# p027readwrite.rb
# Open and read from a text file
# Note that since a block is given, file will
# automatically be closed when the block terminates
File.open('myfile.txt', 'r') do |myFile2|
  while line = myFile2.gets
    puts line
  end
end

# Traversing Directory Trees
require 'find'
Find.find('./') do |f|
  type = case
         when File.file?(f) then "F"
         when File.directory?(f) then "D"
         else "?"
         end
  puts "#{type}: #{f}"
end