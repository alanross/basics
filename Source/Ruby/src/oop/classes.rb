#!/usr/bin/ruby -w

=begin
A long comment with more
then one line
=end
# single line comment

#A variable whose name begins with '$' has a global scope; meaning it can be accessed from anywhere within the program during runtime.
$foobar

# p = ParentClass.new(10, 20)
# a = p.getterMethod
# b = p.publicMethod
# c = ParentClass.staticMethod

class ParentClass

  #A variable whose name begins with an uppercase letter (A-Z) is a constant.
  # access via ParentClass::STATIC_VAR
  STATIC_VAR = "SOMETHING"

  # Initialize our class variables, shared by all instances and descendants
  @@classVar = 0

  # constructor
  def initialize(w, h)
    # Instance Variables
    @width, @height = w, h

    # A variable whose name begins with a lowercase letter (a-z) or underscore (_)
    # is a local variable or method invocation.
    foobar = 1
    _foobar = 3

    @@classVar += 1
  end

  def privateMethodA(var1)
    puts "privateMethodA : #{STATIC_VAR} #@@classVar"
  end

  def privateMethodB(var1="hello", var2=1)
    puts "privateMethodB"
  end

  def protectedMethodB
    privateMethodA(1)
    privateMethodB
    puts "protectedMethodB"
  end

  private :privateMethodA, :privateMethodB
  protected :protectedMethodB

  def getterMethod
    @width
  end

  def setterMethod=(value)
    @width = value
  end

  def publicMethod
    puts "ParentClass myMethod"
    protectedMethodB
    @width * @height
  end

  # Variable Number of Parameters in method
  def sample (*test)
    puts "The number of parameters is #{test.length}"
    for i in 0...test.length
      puts "The parameters are #{test[i]}"
    end
  end

  def ParentClass.staticMethod
    puts "ParentClass myStaticMethod"
  end

  def self.printCount()
    puts "ParentClass count is : #@@classVar"
  end

  # to String
  def to_s
    "(w:#@width,h:#@height)"
  end
end

# define a subclass
class ChildClass < ParentClass

  def initialize
    super(1, 1)
  end

  # overwrite parent method
  def publicMethod
    puts "ChildClass myMethod"
  end
end