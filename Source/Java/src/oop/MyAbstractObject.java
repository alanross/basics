package oop;

public abstract class MyAbstractObject
{
	protected String protectedInstanceVariable;

	public MyAbstractObject( String val )
	{
		try
		{
			if( val == null )
			{
				throw new Exception( "val is null" );
			}

			protectedInstanceVariable = val;
		}
		catch( Exception e )
		{
			System.err.println( e.getMessage() );
		}
	}

	Boolean function1( String[] array )
	{
		return true;
	}

	@Override
	public String toString()
	{
		return "[MyAbstractObject]";
	}
}