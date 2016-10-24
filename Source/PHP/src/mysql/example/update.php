<html>
<body>
<?PHP

if( isset( $_POST[ 'submit' ] ) )
{
    include( "connect.php" );

    $id = $_GET[ 'id' ]; //not secure!
    $interpret = $_POST[ "interpret" ];
    $titel = $_POST[ "titel" ];

    $id = mysql_real_escape_string( $id );
    $interpret = mysql_real_escape_string( $interpret );
    $titel = mysql_real_escape_string( $titel );

    $sql = "UPDATE cds SET interpret='$interpret', titel='$titel' WHERE id='$id'";

    mysql_query( $sql ) or die( mysql_error() );
    mysql_close();

    echo 'Updated data!<br/><br/>' . '<a href="show.php">Show table</a>';
}
else
{
    $query = "SELECT * FROM cds WHERE id='$id'";
    $result = mysql_query( $query );
    $line = mysql_fetch_array( $result )
    ?>
<form method="post" action="update.php?id=<?PHP echo $id; ?>">
    <input type="text" name="interpret" value="<?PHP echo $line[ 'interpret' ]; ?>"><br>
    <input type="text" name="titel" value="<?PHP echo $line[ 'titel' ]; ?>"><br>
    <input type="submit" value="submit" name="submit">
</form>
    <? } ?>
</body>
</html>
