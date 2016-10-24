package oop
{
	import flash.utils.Dictionary;

	public final class MyObject extends MyAbstractObject implements IMyObject
	{
		public static const GLOBAL_STATIC_CONSTANT: int = 0;
		private static const PRIVATE_STATIC_CONSTANT: int = 0;

		public const publicInstanceConstant: int = 0;
		private const privateInstanceConstant: int = 0;

		public var publicInstanceVariable:int = 0;
		private var privateInstanceVariable:int = 0;

		public function MyObject()
		{
			super("Hello");

			var myInt: int = parseInt('3');
			var myFloat1: Number = Number("3.0");
			var myFloat2: Number = NaN; // like null
			var myString: String = null;
			var myBoolean: Boolean = false;

			var myObject: Object = {};
			myObject.dynamicVariable = "Hello There";

			var array1: Array = new Array();
			var array2: Array = ["Hello", "World"] ;

			var list: Vector.<String> = new Vector.<String>();
			list.push("Hello");
			list[0]; // returns Hello;
			list.length;
			list.splice( 0, 1 ); // delete 1 item beginning at index 0;

			var map: Dictionary = new Dictionary();
			map[ "hello" ] = "World"; //add key with val
			map[ "hello" ];			// get val for key
			delete map[ "hello" ];	// remove key with val

			function1( array2 );
			function2();
		}

		override public function function1( array:Array ):Boolean
		{
			trace( array.join(" ") );

			return super.function1( array );
		}

		public function function2():void
		{
		}

		public function dispose():void
		{
		}

		override public function toString():String
		{
			return "[MyObject]";
		}
	}
}