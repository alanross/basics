<?php
//http://davidwalsh.name/web-service-php-mysql-xml-json

if( isset( $_GET[ 'test' ] ) )
{
    $result = array
    (
        array( 'item' => array(
            "id" => "Singular sensation",
            "titel" => "Beady little eyes",
            "interpret" => "Little birds pitch by my doorstep"
        ) )
    );

    header( 'Content-type: application/json' );
    echo json_encode( array( 'items' => $result ) );
    die();
}

// require the user as the parameter
if( isset( $_GET[ 'user' ] ) && intval( $_GET[ 'user' ] ) )
{
    // soak in the passed variable or set our own
    $number_of_items = isset( $_GET[ 'num' ] ) ? intval( $_GET[ 'num' ] ) : 2; //2 is the default
    $format = strtolower( $_GET[ 'format' ] ) == 'json' ? 'json' : 'xml'; //xml is the default
    $user_id = intval( $_GET[ 'user' ] ); //no default

    // connect to the db
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "root";
    $dbname = "test_db"; // Must exist in db. Create on via phpMyAdmin

    $db = mysql_connect( $dbhost, $dbuser, $dbpass ) or die( mysql_error() );
    mysql_select_db( $dbname, $db ) or die( mysql_error() );

    // grab the items from the db
    //$query = "SELECT * FROM cds WHERE id = $user_id ORDER BY ID DESC LIMIT $number_of_items";
    $query = "SELECT * FROM cds";
    $result = mysql_query( $query, $db ) or die( 'Errant query:  ' . $query );

    // create one master array of the records
    $items = array();
    if( mysql_num_rows( $result ) )
    {
        while( $item = mysql_fetch_assoc( $result ) )
        {
            $items[ ] = array( 'item' => $item );
        }
    }

    // output in necessary format
    if( $format == 'json' )
    {
        header( 'Content-type: application/json' );
        echo json_encode( array( 'items' => $items ) );
    }
    else
    {
        header( 'Content-type: text/xml' );
        echo '<items>';
        foreach( $items as $index => $item )
        {
            if( is_array( $item ) )
            {
                foreach( $item as $key => $value )
                {
                    echo '<', $key, '>';
                    if( is_array( $value ) )
                    {
                        foreach( $value as $tag => $val )
                        {
                            echo '<', $tag, '>', htmlentities( $val ), '</', $tag, '>';
                        }
                    }
                    echo '</', $key, '>';
                }
            }
        }
        echo '</items>';
    }

    // disconnect from the db
    @mysql_close( $db );
}
?>