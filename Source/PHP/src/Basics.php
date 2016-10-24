<?php
// needed for correct time functions
date_default_timezone_set( 'UTC' );

//include("filename.filetype");
abstract class AbstractHello
{
    const constant = 'MyConstant';
    protected $name;

    function __construct( $className )
    {
        $this->name = $className;
    }

    protected function getClassName()
    {
        return $this->name;
    }
}

interface IHello
{
    public function getName();
}

class Hello extends AbstractHello implements IHello
{
    public $val;

    function __construct( $className, $newVal )
    {
        parent::__construct( $className );
        $this->val = $newVal;
        $this->types();
    }

    public function add( $v0, $v1 )
    {
        $this->val = $v0 + $v1;
        return $this->val;
    }

    public function getName()
    {
        return parent::getClassName();
    }

    private function types()
    {
        $myInteger = 16; //$zufall = rand(1,100);
        $myFloat = 15.5;
        $myBoolean = true;
        $myString = "Hello World!";

        $myArray1 = array( 1, 2, 3, 4, 5 );
        $myArray2 = array( "foo" => "bar", 12 => true, 5 => 43, 32, "b" => 12 );

        echo $myArray2[ "foo" ] . "<br>"; // bar
        echo $myArray2[ 12 ] . "<br>"; // 1
        echo $myArray2[ 5 ] . "<br>"; // 43

        $count = count( $myArray1 );

        for( $i = 0; $i < $count; $i++ )
        {
            echo $i . "=> " . $myArray1[ $i ] . "<br>\n"; //or
            //echo "{$i} : {$myArray1[$i]}<br>\n";
        }

        foreach( $myArray2 as $i => $value )
        {
            echo $i . ": " . $myArray2[ $i ] . "<br>\n"; //or
            unset( $myArray2[ $i ] ); // delete item. length of array still stays though
        }

        $timestamp = time(); //date object
        $datum = date( "d.m.Y", $timestamp );
        $uhrzeit = date( "H:i", $timestamp );
        echo $datum, " - ", $uhrzeit, " Uhr";

        //echo gettype($myInteger);					// returns type if initialized, elso null
    }
}

function forms()
{
    if( isset( $_POST[ 'submit' ] ) )
    {
        //form was submitted and variable 'submit' exists now
        //assuming variable 'someValue' also
        $someValue = $_POST[ "someValue" ]; //not secure!
        echo $someValue;
    }
    else
    {
        $hello = new Hello( "Name", 5 );
        echo $hello->getName();

        $initialValue = 'some text';
        //show form
        echo'
		<form method="post" action="Hello.php">
			<input type="text" name="someValue" value="' . $initialValue . '"><br>
			<input type="submit" value="submit" name="submit">
		</form>';
    }
}

?>
<!DOCTYPE HTML>
<html>
<head>
    <title>Title</title>
</head>
<body>
<?php forms(); ?>
</body>
</html>