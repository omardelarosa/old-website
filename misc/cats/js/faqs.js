$(document).ready(function(){

	var numberResults = $('#results_content').size();

	$('#header').click(function(){
	
	var w = (Math.floor((Math.random()*10)+1)*100)+1;

	var h = (Math.floor((Math.random()*10)+1)*100)+1;

	$('div.result_unit h1').append('Cats!');

	$('div.result_unit p').append('<img width="100px" src="http://www.placekitten.com/' + w +'/'+ h + '/"></img>');
	
	});

});