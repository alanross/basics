<?php

class MyGreatClass
{
    function MyGreatClass()
    {
        echo "MyGreatClass was imported";


        // Create a simple array.
        $array = array( 1, 2, 3, 4, 5 );
        print "</br>The array: ";
        print_r( $array );

        // Now delete every item, but leave the array itself intact:
        foreach( $array as $i => $value )
        {
            unset( $array[ $i ] );
        }
        print "</br>The array: ";
        print_r( $array );

        // Append an item (note that the new key is 5, instead of 0).
        $array[ ] = 6;
        print "</br>The array: ";
        print_r( $array );

        // Re-index:
        $array = array_values( $array );
        $array[ ] = 7;
        print "</br>The array: ";
        print_r( $array );

        // key may be an integer or string
        // value may be any value of any type
        $arr = array( 5 => 1, 12 => 2 );

        $arr[ ] = 56; // This is the same as $arr[13] = 56;
        // at this point of the script
        print "</br>The new array: ";
        print_r( $arr );


        $arr[ "x" ] = 42; // This adds a new element to
        // the array with key "x"

        unset( $arr[ 5 ] ); // This removes the element from the array

        unset( $arr ); // This deletes the whole array
    }
}

?>