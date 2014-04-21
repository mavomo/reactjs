/** @jsx React.DOM */
var App = React.createClass({
	render : function(){
		return (
			<h1> Hello world. I am a component! </h1>
			)
	}
});

React.renderComponent(<App />, example);