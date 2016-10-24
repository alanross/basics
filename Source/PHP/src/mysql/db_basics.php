<?php

//$db = connect(null);
//create( $db );
//disconnect( $db );

function connect( $dbname )
{
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "root";

    if( $dbname == null )
    {
        $dbname = "test_db";
    } // Must exist in db. Create on via phpMyAdmin

    $db = mysql_connect( $dbhost, $dbuser, $dbpass );

    if( !$db )
    {
        die( "No connection to db: " . mysql_error() );
    }

    print( "Connected to MySQL<br />" );

    mysql_select_db( $dbname, $db ) or die( mysql_error() );

    print( "Connected to Database " . $dbname . "<br />" );

    return $db;
}

function disconnect( $db )
{
    mysql_close( $db );

    print( "Closed connection to Database <br />" );
}

function create()
{
    //name type(length) constraint
    $colID = "id int(255) NOT NULL auto_increment";
    $colInterpret = "interpret varchar(100) NOT NULL";
    $colTitel = "titel varchar(100) NOT NULL";

    mysql_query( "CREATE TABLE IF NOT EXISTS cds
				( 
					" . $colID . ",
					" . $colInterpret . ",
					" . $colTitel . ",
					PRIMARY KEY (id) 
				);"
    ) or die( mysql_error() );

    echo "Table Created, if not yet existed!<br />\n";
}

function insert( $titel, $interpret )
{
    mysql_query( "INSERT INTO cds(titel,interpret)VALUES('$titel','$interpret')" );
}

function getCompleteTable()
{
    $query = "SELECT * FROM cds";
    $result = mysql_query( $query );
}

function preventSimpleInjection()
{
    //http://www.tizag.com/mysqlTutorial/mysql-php-sql-injection.php

    //Normal: SELECT * FROM customers WHERE username = 'timmy'
    //Injection: SELECT * FROM customers WHERE username = '' OR 1''

    //By using a single quote (') they have ended the string part of our MySQL query
    // username = ' '
    // and then added on to our WHERE statement with an OR clause of 1 (always true).
    // username = ' ' OR 1
    //This OR clause of 1 will always be true and so every single entry in
    //the "customers" table would be selected by this statement!

    // so do this:
    $name_bad = "' OR 1'";
    $name_bad = mysql_real_escape_string( $name_bad );


}