def conditions(a, b):
    if a > b: print "a is greater than b";

    if (a > b):
        print "a is greater than b"
    elif (a < b):
        print "a is less than b"
    else:
        print "a is equal to b"


def loops():

    value = ["a", "b", "c"]

    for j in range( 3 ): print "Value number " + str( j ) + " is " + value[ j ]

    for j in range( 10, 0, -2 ):
        x = x + j
        print x

    while (b < a):
        print "b is less than a."
        b = b + 1

    for j in range( 0, 10 ):
        while (k < j):
            print "j = " + str( j ) + " k = " + str( k )
            if (j == 1): break
            k = k + 1
        print "j equals k or j equals 1"

    a = [ "abc", "def", "ghi" ]
    for x in a:
        print x
