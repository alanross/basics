var ExampleApplication = React.createClass( {
	render: function()
	{
		var elapsed = Math.round( this.props.elapsed / 100 );
		var seconds = elapsed / 10 + (elapsed % 10 ? "" : ".0" );
		var message = "React has been running for " + seconds + " seconds.";

		return <p>{message}</p>;
	}
} );

var start = Date.now();

setInterval( function()
{
	ReactDOM.render( <ExampleApplication elapsed={Date.now() - start}/>, document.getElementById( "container" ) );
}, 50 );
