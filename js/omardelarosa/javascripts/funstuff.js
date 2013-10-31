$(document).ready(function(){

//tumblr button begins

	tumblrInfo = {};
	tumblrAvatarUrl = "";
	tumblrCurrentPost = {};
	tumblrCurrentPostContent = "";
	tumblrPostIndex = 0;

	setTumblrInfo = function(data){
		tumblrInfo = data;
		return tumblrInfo;
	};

	setTumblrAvatar = function(data){
		tumblrAvatarUrl = data.response.avatar_url;
		return tumblrAvatarUrl;
	};

	setTumblrCurrentPost = function(data){
		tumblrCurrentPost = data;
		
		//formats content of currentTumblrPost
		
		if (tumblrCurrentPost.response.posts[tumblrPostIndex].type == "text") {
			tumblrCurrentPostContent = tumblrCurrentPost.response.posts[tumblrPostIndex].body;
		} else if (tumblrCurrentPost.response.posts[tumblrPostIndex].type == "photo") {
			tumblrCurrentPostContent = '<p>'+tumblrCurrentPost.response.posts[tumblrPostIndex].caption+"</p>"+'<img src="'+tumblrCurrentPost.response.posts[tumblrPostIndex].photos[0].alt_sizes[0].url+'" width=500px />';
		} else if (tumblrCurrentPost.response.posts[tumblrPostIndex].type == "quote") {
			tumblrCurrentPostContent = '<p>'+tumblrCurrentPost.response.posts[tumblrPostIndex].text+"</p>"+'<p>'+tumblrCurrentPost.response.posts[tumblrPostIndex].source+'</p>';
		} else if (tumblrCurrentPost.response.posts[tumblrPostIndex].type == "link") {
			tumblrCurrentPostContent = '<p><a href="'+tumblrCurrentPost.response.posts[tumblrPostIndex].url+'">'+tumblrCurrentPost.response.posts[tumblrPostIndex].title+'</a></p><p>'+tumblrCurrentPost.response.posts[tumblrPostIndex].description+'';
		} else if (tumblrCurrentPost.response.posts[tumblrPostIndex].type == "link") {
			tumblrCurrentPostContent = '<p><a href="'+tumblrCurrentPost.response.posts[tumblrPostIndex].url+'">'+tumblrCurrentPost.response.posts[tumblrPostIndex].title+'</a></p><p>'+tumblrCurrentPost.response.posts[tumblrPostIndex].description+'';
		} 
		
		return tumblrCurrentPost;
	};
	
	getLastTumblrPostContent = function(){
		
		if (tumblrCurrentPost.response.posts[tumblrPostIndex].type == "text") {
			tumblrCurrentPostContent = tumblrCurrentPost.response.posts[tumblrPostIndex].body;
		} else if (tumblrCurrentPost.response.posts[tumblrPostIndex].type == "photo") {
			tumblrCurrentPostContent = '<p>'+tumblrCurrentPost.response.posts[tumblrPostIndex].caption+"</p>"+'<img src="'+tumblrCurrentPost.response.posts[tumblrPostIndex].photos[0].alt_sizes[0].url+'" width=500px />';
		} else if (tumblrCurrentPost.response.posts[tumblrPostIndex].type == "quote") {
			tumblrCurrentPostContent = '<p>'+tumblrCurrentPost.response.posts[tumblrPostIndex].text+"</p>"+'<p>'+tumblrCurrentPost.response.posts[tumblrPostIndex].source+'</p>';
		} else if (tumblrCurrentPost.response.posts[tumblrPostIndex].type == "link") {
			tumblrCurrentPostContent = '<p><a href="'+tumblrCurrentPost.response.posts[tumblrPostIndex].url+'">'+tumblrCurrentPost.response.posts[tumblrPostIndex].title+'</a></p><p>'+tumblrCurrentPost.response.posts[tumblrPostIndex].description+'';
		} else if (tumblrCurrentPost.response.posts[tumblrPostIndex].type == "link") {
			tumblrCurrentPostContent = '<p><a href="'+tumblrCurrentPost.response.posts[tumblrPostIndex].url+'">'+tumblrCurrentPost.response.posts[tumblrPostIndex].title+'</a></p><p>'+tumblrCurrentPost.response.posts[tumblrPostIndex].description+'';
		} 
		tumblrPostIndex += 1;
		return tumblrCurrentPostContent;	
	};
	

	getMyTumblrInfo = function(){
		$.ajax({
    	type: "GET",
   		url : "http://api.tumblr.com/v2/blog/omardelarosa.tumblr.com/info",
    	dataType: "jsonp",
    	data: {
        	api_key : "Ijw3Ewm7iwga9WL1Pjo3hCwS7o388iYel1nuEMPdmGYA8P51CP",
        	jsonp : "setTumblrInfo"
    			}
    	});
   };
   
   getMyTumblrAvatar = function(){
		$.ajax({
    	type: "GET",
   		url : "http://api.tumblr.com/v2/blog/omardelarosa.tumblr.com/avatar/512",
    	dataType: "jsonp",
    	data: {
        	api_key : "Ijw3Ewm7iwga9WL1Pjo3hCwS7o388iYel1nuEMPdmGYA8P51CP",
        	jsonp : "setTumblrAvatar"
    			}
    	});
   };
   
   getMyCurrentTumblrPost = function(){
		$.ajax({
    	type: "GET",
   		url : "http://api.tumblr.com/v2/blog/omardelarosa.tumblr.com/posts",
    	dataType: "jsonp",
    	data: {
        	api_key : "Ijw3Ewm7iwga9WL1Pjo3hCwS7o388iYel1nuEMPdmGYA8P51CP",
        	jsonp : "setTumblrCurrentPost",
        	limit: 20,
        	offset: 0
    			}
    	});
   };
   
   getMyTumblrInfo();
   getMyTumblrAvatar();
   getMyCurrentTumblrPost();
   
   $('nav li:eq(0)').click(function(){
   
   		$('#subnav').show();
    	$('.tumblr-body').append('<p>'+tumblrCurrentPostContent+'</p>').effect("slide","right","linear","slow");
   
   });
   
	$('#subnav li:eq(0)').click(function(){
    	$('.tumblr-body').append(tumblrInfo.response.blog.title);
   });

	$('#subnav li:eq(1)').click(function(){
    	$('.tumblr-body').append('<img src="'+tumblrAvatarUrl+'" width=128px />').effect("slide","right","linear","slow");
   });
   
    $('#subnav li:eq(2)').click(function(){
		
    	$('.tumblr-body').append('<p>'+tumblrCurrentPostContent+'</p>').effect("slide","right","linear","slow");
   });
   
   $('#subnav li:eq(3)').click(function(){
    	$('.tumblr-body').html('<div></div>').effect("slide","left","linear","slow");
   });
   
   $('#subnav li:eq(4)').click(function(){
    	$('.tumblr-body').hide().effect("drop","slow");
   });
   
   $('#subnav li:eq(5)').click(function(){
    	$('.tumblr-body').show().effect("slide","right","slow");
   });
   
   $('#subnav li:eq(6)').click(function(){
   		if (tumblrPostIndex < 2){
   			tumblrPostIndex = 2;
   		}
		getLastTumblrPostContent();
    	$('.tumblr-body').append('<p>'+tumblrCurrentPostContent+'</p>').effect("slide","right","linear","slow");
   });
   
//tumblr button ends
   
   
//mouse over functions

$('li a').mouseover(function(){
	$(this).css('background-color','black');
	$(this).css('color','white');
});

$('li a').mouseout(function(){
	$(this).css('background-color','transparent');
	$(this).css('color','black');
});

});