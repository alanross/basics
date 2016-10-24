<?php

//http://www.phpro.org/tutorials/Object-Oriented-Programming-with-PHP.html#5
//http://www.selfphp.info/praxisbuch/praxisbuchseite.php?site=185&group=32 //Php & forms

//require_once('/path/to/classes/MyGreatClass.class.php');
require_once( 'a/MyGreatClass.class.php' );

final class Foo
{
    static public $Name = "Me";

    static public function helloWorld()
    {
        print "Hello world from " . self::$Name;
    }
}


abstract class AbstractAnimal
{
    const _ERROR_MSG = 'An Error has occured!';

    //child class must define this function
    abstract function getOwned();

    private $age;

    protected function __construct( $age )
    {
        if( is_nan( $age ) )
        {
            echo self::_ERROR_MSG;
        }


        $this->age = $age;
    }

    public function getAge()
    {
        return $this->age;
    }
}

interface IInsurable
{
    public function getValue();
}

interface IAlive
{
    public function isAlive();
}

class Pet extends AbstractAnimal implements IInsurable, IAlive
{
    private $name;

    public function __construct( $name, $age = 5 )
    {
        if( is_null( $name ) )
        {
            print "name can not be null";
        }

        parent::__construct( $age );
        $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getOwned()
    {
        return ( "Owner String" );
    }

    public function getValue()
    {
        return ( "Priceless" );
    }

    public function getAge()
    {
        return parent::getAge() + 10;
    }

    public function isAlive()
    {
        return TRUE;
    }
}

class House implements IInsurable
{
    public function getValue()
    {
        return ( "Rising fast" );
    }

    public function getAge()
    {
        return $this->age + 10;
    }

}

?>

<body>
<h1>PHP-OOP Demo</h1>

<?php

function boolString( $bValue = false )
{ // returns string
    return ( $bValue ? 'true' : 'false' );
}

$charlie = new Pet( "Charlie" );
$catAge = $charlie->getAge();
$catName = $charlie->getName();
$catIsAlive = boolString( $charlie->isAlive() );

print "$catName is $catAge years old! and isAlive $catIsAlive <br><br>";
if( $charlie instanceof Pet ) {
    echo ( "charlie is a pet<br>\n" );
}
if( $charlie instanceof AbstractAnimal ) {
    print ( "charlie is an animal<br>\n" );
}
if( $charlie instanceof House ) {
    print ( "charlie is a house<br>\n" );
}
if( $charlie instanceof IInsurable ) {
    print ( "charlie is insurable<br>\n" );
}

print "</br>\n";
print Foo::$Name . "\n";
Foo::helloWorld();

print "</br>\n";
$myObject = new MyGreatClass;

?>
<hr>
</body>