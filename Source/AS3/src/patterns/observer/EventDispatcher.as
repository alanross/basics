package patterns.observer
{
	// var d: EventDispatcher = new EventDispatcher();
	// d.addObserver( this ) // this must impement IEventObserver
	// var event: ObserverEvent = new ObserverEvent( ObserverEvent.A_TYPE_OF_EVENT, new Object() );
	// d.dispatch(event);
	
	public final class EventDispatcher
	{
		private var _observer:Vector.<IEventObserver> = new Vector.<IEventObserver>();

		public function EventDispatcher()
		{
		}

		public function addObserver( observer:IEventObserver ):void
		{
			if( hasObserver( observer ) )
			{
				throw new Error();
			}

			_observer.unshift( observer );
		}

		public function removeObserver( observer:IEventObserver ):void
		{
			if( !hasObserver( observer ) )
			{
				throw new Error();
			}

			const index:int = _observer.indexOf( observer );

			_observer.splice( index, 1 );
		}

		public function hasObserver( observer:IEventObserver ):Boolean
		{
			const index:int = _observer.indexOf( observer );

			return ( -1 != index );
		}

		public function dispose():void
		{
			_observer.splice( 0, _observer.length );
			_observer = null;
		}

		public function dispatch( event:ObserverEvent ):void
		{
			var n:int = _observer.length;

			while( --n > -1 )
			{
				_observer[n].onObserverEvent( event );
			}
		}

		public function toString():String
		{
			return "[EventDispatcher]";
		}
	}
}