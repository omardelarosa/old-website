/* 

To Do List:

-Turn the menu levels into a variable
-figure out how menuLevel variable can then create a CSS class of itself
-figure out how to make the UL and LI cell widths into a variable
-fix height restrictions (or create a flexible height variable)


ideas:

-make "level" its own class. (perhaps a variable called "depth" with numerical value, each one being a level)
-have a function check what the value of this class is that is nested within the "1st level menu open/close
-have this level concatinated onto the end of the $() selector.

-this

*/

$(document).ready(function(){

	var currentMenu = '';

// ---------start main (0th-level) menu open/close-----------

	$('#navbar ul').mouseover(function(){
		$('.overflow',this).show(100);	//displays overflow
	});

	$('#navbar ul').mouseleave(function(){
		$('.overflow',this).hide(100);	//hides overflow	
	});

//-----------end main (0th-level) menu open/close------------

//---------start sub-nested (1st-level) menu open/close------

$('.expandable').mouseover(function(){
		$('.sub',this).show(0);	//displays overflow	
	});

$('.expandable').mouseleave(function(){
		$('.sub',this).hide(0);	//hides overflow	
	});

// ---------end sub-nested (1st-level) menu open/close--------

// ---------start sub2-nested (2nd-level) menu open/close-----

$('.sub .expandable').mouseover(function(){
		$('.sub2',this).show(0);	//displays overflow
	});

$('.sub .expandable').mouseleave(function(){
		$('.sub2',this).hide(0);	//hides overflow		
	});

// ---------end sub2-nested (2nd-level) menu open/close---------


// ---------start sub3-nested (3rd-level) menu open/close---------

$('.sub .sub2 .expandable').mouseover(function(){
		$('.sub3',this).show(0);	//displays overflow
	});

$('.sub .sub2 .expandable').mouseleave(function(){
		$('.sub3').hide(0);	//hides overflow		
	});

// ---------end sub3-nested (3rd-level) menu open/close---------



// ---------start highlighting/unhighlighting of selected item---------

$('#navbar li').mouseover(function(){
		var currentMenu = $(this).attr('id');	
		if($(this).hasClass('expandable')){		//checks for expandable class
			$(this).addClass('selectedExpandable');  //adds invertedtriangle
			$(this).addClass('selected');
			$(this).css('color','#FFFFFF');
			$(this).css('background-color','#000000');
		}else{
			$(this).addClass('selected');  //inverts colors of selected item
			$(this).css('color','#FFFFFF');
			$(this).css('background-color','#000000');
		}
	});

$('#navbar li').mouseleave(function(){
		if($(this).hasClass('expandable')){			//checks for expandable class
			$(this).removeClass('selectedExpandable');  //removes invertedtriangle
			$(this).removeClass('selected');
			$(this).css('color','#000000');
			$(this).css('background-color','#FFFFFF');
		}else{
			$(this).removeClass('selected');  //restores colors of selected item
			$(this).css('color','#000000');
			$(this).css('background-color','#FFFFFF');
		}
	});

// ---------end highlighting/unhighlighting of selected item---------


});