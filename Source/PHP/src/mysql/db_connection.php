<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "root";

$dbname = "test_db"; // Must exist in db. Create on via phpMyAdmin

$db = mysql_connect( $dbhost, $dbuser, $dbpass );

if( !$db )
{
    die( "No connection to db: " . mysql_error() );
}

print( "Connected to MySQL<br />" );

mysql_select_db( $dbname, $db ) or die( mysql_error() );

print( "Connected to Database " . $dbname . "<br />" );

mysql_close( $db );

print( "Closed connection to Database " . $dbname . "<br />" );
?>