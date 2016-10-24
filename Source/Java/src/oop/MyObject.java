package oop;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.StringTokenizer;

public final class MyObject extends MyAbstractObject implements IMyObject
{
	public static final int GLOBAL_STATIC_CONSTANT = 0;
	private static final int PRIVATE_STATIC_CONSTANT = 0;

	public final int publicInstanceConstant = 0;
	private final int privateInstanceConstant = 0;

	public int publicInstanceVariable = 0;
	private int privateInstanceVariable = 0;

	public MyObject()
	{
		super( "Hello" );

		byte myByte = 0;    //-128 to 127
		short myShort = 0;  //-32768 to 32767
		int myInt = Integer.parseInt( "3" );    //-2147483648 to 2147483647
		long myLong = 0L;    //-9223372036854775808 to 9223372036854775807
		float myFloat1 = Float.parseFloat( "0.0" );
		float myFloat2 = 0.0f;
		double myDouble = 0.0d;
		char myChar = '\u0000';
		String myString = null;
		boolean myBoolean = false;

		int[] array1 = new int[ 10 ];    // array with 10 items, all are 0
		int[] array2 = new int[]{ 1, 2, 3 };    // array with 10 items
		int[][] array3 = new int[ 2 ][ 2 ];    // matrix

		for( int i = 0; i < array2.length; ++i )
		{
		}

		ArrayList<Integer> list = new ArrayList<Integer>();
		list.add( 3 );
		list.get( 0 );
		list.remove( 0 );
		list.size();

		HashMap<String, Number> map = new HashMap<String, Number>(); //<key, value>
		map.put( "two", new Integer( 2 ) );
		map.put( "three", new Float( 3.0f ) );
		map.get( "two" );
		map.remove( "three" );

		function1( new String[]{ "Main", "World" } );
		function2();
	}

	@Override
	public Boolean function1( String[] array )
	{
		return super.function1( array );
	}

	public void function2()
	{
		StringBuilder sb = new StringBuilder();
		sb.append( "nice to meet you" );

		StringTokenizer st = new StringTokenizer( sb.toString(), " " );

		int i = 0;

		while( st.hasMoreTokens() )
		{
			System.out.println( ++i + " " + st.nextToken() + " " ); //++i prints at 0, i++ prints at 1
		}
	}

	public void dispose()
	{
	}

	@Override
	public String toString()
	{
		return "[MyObject]";
	}
}