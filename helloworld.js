/** @jsx React.DOM */
var myFirstComponent = React.createClass({
	render : function(){
		//La fonction render, ne peut retourner qu'un element. 

		return (
				<div>
					<h1> Hello world. I am a component! </h1>
					<p> You have nothing to worry about.</p>
					<p> What is your name? </p>
				</div>
			   )
	}
});
//Appel du composant. 
// Le deuxième paramètre doit correspondre à un tag du fichier HTML Défini.
React.renderComponent(<myFirstComponent />, helloooo);