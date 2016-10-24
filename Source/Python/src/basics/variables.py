def primitives():
    myBool = True
    myInt = 100
    myLong = 51924361L
    myFloat = 1000.0
    myString = "Hello World"

    print(str( myBool ) + ' | ' + str( myInt ) + ' | ' + str( myLong ) + ' | ' + str( myFloat ) + myString)
    print "myBool %s." % myBool
    print "myInt: %s. myFloat: %s." % (myInt, myFloat)


def assignment():
    # Python allows you to assign a single value to several variables simultaneously.
    a = b = c = 1

    # Two integer objects with values 1 and 2 are assigned to variables d and e respectively,
    # and one string object with the value "john" is assigned to the variable f.
    d, e, f = 1, 2, "john"


def arrays():
    # Arrays in basic Python are actually lists that can contain mixed datatypes.
    list = [ 'abcd', 786, 2.23, 'john', 70.2 ]
    tinylist = [ 123, 'john' ]

    print list  # Prints complete list
    print list[ 0 ]  # Prints first element of the list
    print list[ 1:3 ]  # Prints elements starting from 2nd till 3rd
    print list[ 2: ]  # Prints elements starting from 3rd element
    print tinylist * 2  # Prints list two times
    print list + tinylist  # Prints concatenated lists

    # Multi-dimensional lists
    a = [ [ 0, 1, 2 ], [ 3, 4, 5 ] ]
    print a[ 1 ]

    # For Lists, the + operator appends the list on the right (b) to the list on the left.
    a = [ "AA", "BB" ]
    b = [ "XX", "YY" ]
    c = a + b
    print c


def dictionaries():
    dict = {}
    dict[ 'one' ] = "This is one"
    dict[ 2 ] = "This is two"

    tinydict = {'name': 'john', 'code': 6734, 'dept': 'sales'}

    print dict[ 'one' ]  # Prints value for 'one' key
    print dict[ 2 ]  # Prints value for 2 key
    print tinydict  # Prints complete dictionary
    print tinydict.keys( )  # Prints all the keys
    print tinydict.values( )  # Prints all the values


def touples():
    tuple = ('abcd', 786, 2.23, 'john', 70.2)
    tinytuple = (123, 'john')

    print tuple  # Prints complete list
    print tuple[ 0 ]  # Prints first element of the list
    print tuple[ 1:3 ]  # Prints elements starting from 2nd till 3rd
    print tuple[ 2: ]  # Prints elements starting from 3rd element
    print tinytuple * 2  # Prints list two times
    print tuple + tinytuple  # Prints concatenated lists


def conversion():
    # Converts x to an integer. base specifies the base if x is a string.
    int( 1.0 )

    # Converts x to a long integer. base specifies the base if x is a string.
    # long( x )

    # Converts x to a floating-point number.
    # float( x )

    # Creates a complex number.
    # complex( real )

    # Converts object x to a string representation.
    # str( y )

    # Converts object x to an expression string.
    # repr( y )

    # Evaluates a string and returns an object.
    # eval( z )

    # Converts s to a tuple.
    # tuple( s )

    # Converts s to a list.
    # list( s )

    # Converts s to a set.
    # set( s )

    # Creates a dictionary. d must be a sequence of (key,value) tuples.
    # dict( d )

    # Converts s to a frozen set.
    # frozenset( s )

    # Converts an integer to a character.
    # chr( x )

    # Converts an integer to a Unicode character.
    # unichr( x )

    # Converts a single character to its integer value.
    # ord( x )

    # Converts an integer to a hexadecimal string.
    # hex( x )

    # Converts an integer to an octal string.
    # oct( x )
