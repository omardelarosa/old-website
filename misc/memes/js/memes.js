$(document).ready(function(){

	$('#button').click(function(){

	var memeName = $('#meme_name').val();

	var memeUrl = $('#meme_url').val();

	$('div.result_unit h1').append(''+memeName+'');

	$('div.result_unit p').append('<img width="100px" src="'+memeUrl+'"></img>');
	
	return false

	});

});