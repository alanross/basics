import sys

print sys.argv

# Ask for the number and store it in userNumber
userNumber = raw_input( 'Give me an integer number: ' )

# Try to convert the user input to an integer
try:
    userNumber = int( userNumber )
# Catch the exception if the input was not a number
except ValueError:
    userNumber = 0
else:
    # Get the square of the number
    # userNumber**2 is the same as saying pow(userNumber, 2)
    userNumber = userNumber ** 2

# Print square of given number
print 'The square of your number is: ' + str( userNumber )
