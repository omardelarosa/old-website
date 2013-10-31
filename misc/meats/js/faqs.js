$(document).ready(function(){

	var numberResults = $('#results_content').size();

	$('#header').click(function(){
	
	var w = (Math.floor((Math.random()*10)+1)*100)+1;

	var h = (Math.floor((Math.random()*10)+1)*100)+1;

	$('div.result_unit h1').append('Meats!');

	$('div.result_unit p').append('<img width="100px" height="100px" src="http://www.baconmockup.com/' + w +'/'+ h + '/"></img>');
	
	});

});