<?php

/**
 * Objektart                    Beispiel
 * String                        "text"
 * Zahlenwert                    0-9, or 0.1
 * boolean                        true/false
 * Liste/Array                    [wert, wert2, ...] (Werte innerhalb von [], durch Komma getrennt)
 * Objekt/"assoziativer Array"     {"attname1": wert1, "attname2": wert2, ...} Index/Wert-Zuordnung mithilfe eines Doppelpunkts innerhalb von geschweiften Klammern, durch Komma getrennt
 */

$array = createDemoArray();

$jsn = arrayToJSon( $array );

jsonToArray( $jsn );

//echo $jsn;

function createDemoArray()
{
    $names = array(
        'Fabian' => 20,
        'Stefan' => 65,
        'Simon' => 18,
        'Joerg' => 60,
        'Bettina' => 12,
        'Uwe' => 18,
        'Mark' => 15,
        'Franz' => 65,
        'Heinz' => 90
    );

    return $names;
}

function arrayToJson( $input )
{
    return json_encode( $input );
}

function jsonToArray( $jsn )
{
    $nameObj = json_decode( $jsn );

    //echo $nameObj->{'Fabian'};
    // or
    //echo $nameObj->Fabian;
}

/*$query = "SELECT * FROM cds";
function handleRequest($query)
{
	$dbhost="localhost";
	$dbuser="root";
	$dbpass="root";
	$dbname="test_db"; // Must exist in db. Create on via phpMyAdmin
	
	$db = mysql_connect($dbhost,$dbuser,$dbpass) or die( mysql_error() );
	
	mysql_select_db($dbname, $db) or die(mysql_error());
	
	$result = mysql_query($query) or die( mysql_error());
	
	$rows = array();
	while($r = mysql_fetch_assoc($result))
	{
    	$rows[] = $r;
	}
	
	print json_encode($rows);
}*/
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
    <script type="text/javascript">
        $( document ).ready( function ()
        {
            $( "#sqlrequest" ).click( function ()
            {
                performJSONRequest();
            } );
        } );

        function performJSONRequest()
        {
            var reqUrl = 'sqlrequest.php';
            var reqParam = { user:"2", num:"2", format:"json" };

            $.getJSON( reqUrl, reqParam, function ( returnData )
            {
                var items = [];

                $.each( returnData.items, function ( i, item ) //items is an array object in the return data
                {
                    // as in xml the object must be at right place. a node would be items.item.item.id ...
                    items.push( '<li id="' + i + '">' + item.item.id + ' ' + item.item.interpret + ' ' + item.item.titel + '</li>' );
                } );

                $( '<ul/>', { 'class':'jsonresultlist', html:items.join( '' ) } ).appendTo( '#result' );
            } );
        }
    </script>
    <title>JSon Php MySQL Example</title>
<body>
<div id="result"></div>
<div><a href="#" id="sqlrequest">Send Request</a></div>
</body>
</html>