import os, math  # Import the os and math modules
from math import *  # Imports all functions from the math module

# Define some variables we can access by importing file
numberone = 1


# myParentClassInstance = ParentClass( 5 )
# myParentClassInstance.parentMethod() ...
class ParentClass:
    'Optional class documentation string'

    parentAttr = 100

    __secretCount = 0

    # parentInstance = ParentClass(args)
    def __init__(self, a):
        self.a = a
        ParentClass.parentAttr += 1
        print "Calling ParentClass constructor %s" % a

    # call del parentInstance
    def __del__(self):
        class_name = self.__class__.__name__
        print class_name, "destroyed"

    # call parentInstance.str()
    def __str__(self):
        print "Printable string representation"

    def parentMethod(self):
        print 'Calling parent method'

    def myMethod(self):
        print 'Calling parent method'

    def count(self):
        self.__secretCount += 1
        print self.__secretCount

    def setAttr(self, attr):
        ParentClass.parentAttr = attr

    def getAttr(self):
        print "Parent attribute :", ParentClass.parentAttr


# myChildClassInstance = ChildClass()
#
# Derived classes are declared much like their parent class;
# however, the base class or list of base classes to inherit from is given after the class name
class ChildClass( ParentClass ):  # define child class
    def __init__(self):
        ParentClass.__init__( self, 1000 )
        print "Calling ChildClass constructor"

    def childMethod(self):
        print 'Calling child method'

    # overwrite parent method
    def myMethod(self):
        print 'Calling child method'


class Employee:
    'Common base class for all employees'
    empCount = 0

    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
        Employee.empCount += 1

    def displayCount(self):
        print "Total Employee %d" % Employee.empCount

    def displayEmployee(self):
        print "Name : ", self.name, ", Salary: ", self.salary


class Pet( object ):
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def getName(self):
        return self.name

    def getSpecies(self):
        return self.species

    def __str__(self):
        return "%s is a %s" % (self.name, self.species)


def isDog(animal):
    if isinstance( animal, Pet ):
        return False
    elif isinstance( animal, Dog ):
        return True
    else:
        raise RuntimeError( 'Unknown animal!' )


# p = Pet( "Polly", "Parrot" )
# p.getName( )
# p.getSpecies( )
# p.age = 7  # Add an 'age' attribute.
# p.age = 8  # Modify 'age' attribute.
# print "Polly's age %d" % p.age
# del p.age  # Delete 'age' attribute.
# print p
# print "Is dog %s" % isDog( p )


class Dog( Pet ):
    def __init__(self, name, chases_cats):
        Pet.__init__( self, name, "Dog" )
        self.chases_cats = chases_cats

    def chasesCats(self):
        return self.chases_cats
