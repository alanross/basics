<html>
<body>
<table>
    <?PHP
    include( "connect.php" );

    $query = "SELECT * FROM cds";
    $result = mysql_query( $query ) or die( mysql_error() );

    while( $line = mysql_fetch_array( $result ) )
    {
        echo
            "<tr>"
            . "<td>" . $line[ 'interpret' ] . "</td>\n"
            . "<td>" . $line[ 'titel' ] . "</td>\n"
            . "<td><a href=\"update.php?id=" . $line[ 'id' ] . "\">Edit</a></td>\n"
            . "<td><a href=\"delete.php?id=" . $line[ 'id' ] . "\">Delete</a></td>\n"
            . "</tr>\n";
    }

    mysql_free_result( $result );
    mysql_close();
    ?>
</table>
<br>
<a href="insert.php">Insert more</a>
</body>
</html>
