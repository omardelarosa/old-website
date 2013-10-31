var $j = jQuery.noConflict();

var loginLinks = j$('#top-right').html();

if (loginLinks != null) {
	j$('ul#green').append(loginLinks);
}


pageTitle = $j('.content h2').text();
if ( pageTitle.match(/Submit a request/g) == "Submit a request")  {
	$j('#ticketform').hide();
	$j('#attachments_for_portal').hide();
	$j('.content h3').hide();
	$j('#uploads_form').hide();
	$j('#submit-button').hide();
	$j('div#container .content').html('<iframe src="https://patch.zendesk.com/account/dropboxes/20097622#/dropbox/tickets/new" width="850px" height="500px"></iframe>');
};