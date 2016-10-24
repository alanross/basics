<html>
<body>
<?php
$id = $_GET[ 'id' ];

include( "connect.php" );

$id = mysql_real_escape_string( $id );

$sql = "DELETE FROM cds WHERE id='$id'";

mysql_query( $sql ) or die( mysql_error() );
mysql_close();

echo 'Deleted data!<br/><br/>' . '<a href="show.php">Show table</a>';
?>
</body>
</html>