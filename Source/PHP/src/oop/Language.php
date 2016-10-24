<?php

//http://www.php.net/manual/de/index.php

//include("dateiname.endung");


class Test
{
    public $var;
}

$a = new Test();
$a->var = 10;


function add( $param1, $param2 )
{
    $param3 = $param1 + $param2;

    return $param3;
}

function types()
{
    //http://www.php.net/manual/de/language.types.array.php

    $myInteger = 16; // a PHP Integer - always available
    $myFloat = 15.5; // a PHP Float   - always available
    $myBoolean = true; // a PHP Boolean - always available
    $myString = "Hello World!"; // a PHP String  - always available
    $myArray = array( "foo" => "bar", 12 => true );
    $myArray2 = array( 1, 2, 3, 4, 5 );
    // This array is the same as ...
    array( 5 => 43, 32, 56, "b" => 12 );

    // ...this array
    array( 5 => 43, 6 => 32, 7 => 56, "b" => 12 );

    //echo $myArray["foo"]; // bar
    //echo $myArray[12];    // 1

    // Now delete every item, but leave the array itself intact:
    foreach( $myArray2 as $i => $value )
    {
        //unset($myArray2[$i]); // delete item. length of array still stays though
    }

    $count = count( $myArray2 );
    for( $i = 0; $i < $count; $i++ )
    {
        //echo $i.": " . $myArray2[$i] . "<br>\n"; //or
        //echo "{$i} : {$myArray2[$i]}<br>\n";
    }

    //echo gettype($myInteger);	// returns type if initialized, elso null
}

function controlStructures()
{
    $user = 'claudio';

    if( $user == "Claudia" )
    {
        echo "Bist du Cloud?";
    }

    switch( $user )
    {
        case ( "Claudia" ):
            echo "Bist du Cloud?";
            break;

        case ( "Andreas" ):
        case ( "Andi" ):
        case ( "Andy" ):
            echo "Bist du Unki?";
            break;

        default:
            echo "Also du bist sicher weder Cloud noch Unki!";
            break;
    }

    $array = array( 1, 2, 3, 4, 5 );
    $count = count( $array );

    for( $i = 0; $i < $count; $i++ )
    {
        echo $i . ": " . $array[ $i ] . "<br>\n"; //or
    }

    while( $count-- > 0 )
    {
        echo "{$count} : {$array[$count]}<br>\n";
    }

}

function dateObject()
{
    //http://www.schattenbaum.net/php/datum.php
    $timestamp = time();
    $datum = date( "d.m.Y", $timestamp );
    $uhrzeit = date( "H:i", $timestamp );
    echo $datum, " - ", $uhrzeit, " Uhr";
}

function io()
{
    //	Modus    Funktion               Dateizeiger    Anlegen?
    //  ==========================================================
    //  r        Lesen                  Anfang         Nein
    //  r+       Lesen und Schreiben    Anfang         Nein
    //  w        Schreiben              Anfang         Ja
    //  w+       Lesen und Schreiben    Anfang         Ja
    //  a        Schreiben              Ende           Ja
    //  a+       Lesen und Schreiben    Ende           Ja


    $fp = fopen( 'file.txt', 'w+' ); // Open file.txt for reading from beginning
    //$fp = fopen('/usr/local/data/file.txt', 'w+'); // Open a file in another directory for writing and clear its contents
    //$fp = fopen('http://www.yahoo.com/', 'r'); // Open a webpage for reading. Only works if HTTP wrappers are
    //$fp = fopen("list.txt", "a+") or die("Couldn't create new file");

    //$read = fread($fp, 1024); // Read 1024 bytes from the file pointer
    //$read = fgets($fp, 2048); // Read up to 2048 bytes, unless EOL or EOF is found.

    fwrite( $fp, 'This is some text' ); // Writes to the file pointer
    //if (!fwrite($fp, �This is some text�)) {} // This conditional checks to see if we could not write to the file pointer

    fclose( $fp );
}

function sessionHandling()
{
    //http://www.schattenbaum.net/php/sessions.php
}

function math()
{
    $zufall = rand( 1, 100 );
}

function handlingForms()
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
        $initialValue = 'some text';
        //show form
        echo'
		<form method="post" action="PHP-Language.php">
			<input type="text" name="someValue" value="' . $initialValue . '"><br>
			<input type="submit" value="submit" name="submit">
		</form>';
    }
}