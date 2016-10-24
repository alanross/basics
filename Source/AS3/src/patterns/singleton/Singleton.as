package patterns.singleton
{
	// Singleton.initionalize();
	// Singleton.staticFunction();
	// Singleton.get().toString();
	
	public final class Singleton
	{
		private static var _instance:Singleton;

		public static function initialize():void
		{
			if( _instance != null )
			{
				throw new Error( 'Singleton' );
			}

			_instance = new Singleton( new Lock() );
		}

		public static function get():Singleton
		{
			return _instance;
		}

		public static function staticFunction():void
		{
			_instance.internalFunction();
		}

		public function Singleton( lock:Lock )
		{

		}

		private function internalFunction():void
		{

		}

		public function toString():String
		{
			return "[Singleton]";
		}
	}
}
class Lock
{
}