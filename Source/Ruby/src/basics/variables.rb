def primitives()
  myBool = true
  myInt = 100
  myFloat = 1000.0
  myString = "Hello World"
end

def symbols()
  light = :on

  if light == :on
    puts "The light is on"
  else
    puts "The light is off"
  end
end

def arrays()
  a = ["A string", 1, true, :symbol, 2]
  a << "four" # adds an element
  a[3] = "four"

  puts a[1]

  b = [[0, 1, 2], [3, 4, 5]]

  c = [1, 2] + [3, 4] # => [1, 2, 3, 4]
  d = ["A", "B"] * 3 # => ["A", "B", "A", "B", "A", "B"]
  e = [1, 2, 3] & [2, 3, 4] # => [2, 3]
  f = a.length

  #The collect iterator returns all the elements of a collection.
  g = [1, 2, 3, 4, 5]
  h = g.collect { |x| 10*x }
  puts h
end

def dictionaries()
  myDict = {:name => "Jane", :age => 17}
end

def dateAndTime()
  time1 = Time.new

  puts "Current Time : " + time1.inspect

  # Time.now is a synonym:
  time2 = Time.now
  puts "Current Time : " + time2.inspect
end