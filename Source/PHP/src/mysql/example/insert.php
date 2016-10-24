<html>
<body>
<?PHP

if( isset( $_POST[ 'submit' ] ) )
{
    $interpret = $_POST[ "interpret" ]; //not secure!
    $titel = $_POST[ "titel" ];

    include( "connect.php" );

    $interpret = mysql_real_escape_string( $interpret );
    $titel = mysql_real_escape_string( $titel );

    $sql = "INSERT INTO cds(titel,interpret)VALUES('$titel','$interpret')";

    mysql_query( $sql ) or die( mysql_error() );
    mysql_close();

    echo 'Inserted data!<br/><br/>' .
        '<a href="insert.php">Insert more</a> or ' .
        '<a href="show.php">Show table</a>';
}
else
{
    ?>
<form method="post" action="insert.php">
    <input type="text" name="interpret" value="interpret"><br>
    <input type="text" name="titel" value="titel"><br>
    <input type="submit" value="submit" name="submit">
</form>
    <?PHP
}
?>
</body>
</html>
