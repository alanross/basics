package patterns.observer
{
	public final class ObserverEvent
	{
		// you could also put this into a simple enumeration class
		public static const A_TYPE_OF_EVENT: int = 1;
		public static const ANOTHER_TYPE_OF_EVENT: int = 2;
		
		private var _type:int;
		private var _data: Object;

		public function ObserverEvent()
		{
		}

		public function reset( type: int, data: Object ):void
		{
			_type = type;
			_data = data;
		}

		public function get type():int{ return _type; }
		public function get data():Object{ return _data; }

		public function toString():String
		{
			return "[ObserverEvent]";
		}
	}
}