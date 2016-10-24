package oop
{
	public class MyAbstractObject
	{
		protected var protectedInstanceVariable:String;

		public function MyAbstractObject( val:String )
		{
			try
			{
				if( val == null )
				{
					throw new Error( "val is null" );
				}

				protectedInstanceVariable = val;

			}
			catch( e:Error )
			{
				trace( e );
			}
		}

		public function function1( array:Array ):Boolean
		{
			return true;
		}

		public function toString():String
		{
			return "[MyAbstractObject]";
		}
	}
}