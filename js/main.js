// =====================================
// ========= GLOBAL VARIBLES ===========
// =====================================

// a public alias object for encapsulation purposes.
var O = O ? O : {};

// var last_clicked_node;

// =====================================
// ======= Load Content As JSON ========
// =====================================


//load the content as JSON
O.content = {
        id: 'title icon-home icon-large',
        label: '',
        amount: 50,
        callback: O.change_section,
        body_html: "<div id='default_content' style='display:block'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><span class='icon-long-arrow-left icon-large'/><span>  click the bubbles to get started.</div>",
        color: '#AA0000',  // color for root node, will be inherited by children 
        children: [
            { 
                label: 'code', 
                id: 'section_title icon-code icon-large',
                amount: 20,
                color: '#FFFFFF',
                callback: function(node){
                    O.change_section(node)
                    O.get_tumblr_page_json("code")
                },
                children: [
                    {
                        label: 'github', 
                        amount: 15,
                        id: 'icon-github icon-large link',
                        color: '#AA0000',
                        url: 'http://github.com/omardelarosa',
                    },
                    {
                        label: 'bitbucket', 
                        amount: 15,
                        id: 'icon-bitbucket icon-large link',
                        color: '#AA0000',
                        url: "https://bitbucket.org/omdel"
                    }
                ]
            },
            { 
                label: 'info', 
                id: 'section_title icon-male icon-large',
                amount: 20,
                color: '#FFFFFF',
                callback: function(node){
                    O.change_section(node)
                    O.get_tumblr_page_json("about")
                },
                children: [
                    {
                        label: 'bio', 
                        amount: 15,
                        id: 'icon-book icon-large link',
                        color: '#AA0000',
                        callback: function(){
                            O.get_tumblr_page_json('about');
                        }
                    },
                    {
                        label: 'press', 
                        amount: 15,
                        id: 'icon-bullhorn icon-large link',
                        color: '#AA0000',
                        callback: function(){
                            O.get_tumblr_page_json('press');
                        }
                    },
                    {
                        label: 'writing', 
                        amount: 15,
                        id: 'icon-file-text icon-large link',
                        color: '#AA0000',
                        callback: function(){
                            O.get_tumblr_page_json('writing');
                        }
                    }
                ]
            },
            { 
                label: 'media', 
                id: 'section_title icon-camera icon-large',
                amount: 20,
                color: '#FFFFFF',
                callback: O.change_section,
                children: [
                    {
                        label: 'instagram', 
                        amount: 15,
                        id: 'icon-instagram icon-large link',
                        color: '#AA0000',
                        url: 'http://instagram.com/omdel'
                    },
                    {
                        label: 'flickr', 
                        amount: 15,
                        id: 'icon-flickr icon-large link',
                        color: '#AA0000',
                        url: "http://www.flickr.com/photos/48006331@N07/"
                    },
                    {
                        label: 'youtube', 
                        amount: 15,
                        id: 'icon-youtube icon-large link',
                        color: '#AA0000',
                        url: "http://www.youtube.com/warmturkey"
                    }
                ]
            },
            { 
                label: 'music', 
                id: 'section_title icon-music icon-large',
                amount: 20,
                color: '#FFFFFF',
                callback: function(node){
                    O.change_section(node)
                    O.get_tumblr_page_json("about","littleinsects.com")
                },
                children: [
                    {
                        label: 'solo',
                        amount: 15,
                        id: 'solo-music icon-male icon-large link',
                        color: '#AA0000',
                        url: "http://omardelarosa.bandcamp.com"
                    },
                    {
                        label: 'little insects',
                        amount: 15,
                        id: 'little-insects icon-play icon-large link',
                        color: '#AA0000',
                        url: "http://littleinsects.bandcamp.com"
                    }
                ]
            },
            {   
                label: 'blogs',
                amount: 20,
                color: '#FFFFFF',
                callback: O.change_section, 
                id: 'section_title icon-file-text icon-large',
                children: [
                    { 
                        label: 'tumblr',
                        amount: 15, 
                        id: 'tumblr icon-tumblr icon-large link',
                        color: '#AA0000',
                        url: "http://omardelarosa.tumblr.com"
                    },
                    { 
                        label: 'blogger',
                        amount: 15, 
                        id: 'blogger icon-archive icon-large link',
                        color: '#AA0000',
                        url: "http://blog.omardelarosa.com"
                    }

                ]
            },
            { 
                label: 'contact', 
                amount: 20, 
                color: '#FFFFFF',
                callback: O.change_section,
                id: 'section_title icon-envelope icon-large',
                children: [
                    { 
                        label: 'email', 
                        amount: 15,
                        id: 'icon-envelope-alt icon-large link',
                        color: '#AA0000',
                        url: 'mailto:thedelarosa@gmail.com'
                    },
                    { 
                        label: 'twitter', 
                        amount: 15,
                        id: 'icon-twitter icon-large link',
                        color: '#AA0000',
                        url: "http://twitter.com/omardelarosa"
                    },
                    { 
                        label: 'facebook', 
                        amount: 15,
                        id: 'icon-facebook icon-large link',
                        color: '#AA0000',
                        url: 'http://facebook.com/omardelarosa'
                    },
                    { 
                        label: 'linkedin', 
                        amount: 15,
                        id: 'icon-linkedin icon-large link',
                        color: '#AA0000',
                        url : 'http://lnkd.in/G4Wd7n'
                    }
                ]
            }
        ]
};


// =====================================
// ===== GLOBAL HELPER FUNCTIONS =======
// =====================================

O.change_section = function(node){
    O.set_content_text(' ')
    //default title
    var heading_name = node == "" || node.label == "" ? "developer / musician / etc" : node.label;

    var body = node.body_html || " "

    $('#sub_heading').html(heading_name);
    $('#content_body').html(body);

}

O.get_tumblr_page_json = function(section_name,tumblr_url){
    var tumblr_url = tumblr_url || "omardelarosa.tumblr.com"
    var section_name = section_name || 'about';
    $('body').append('<script src="http://'+tumblr_url+'/'+section_name+'/json"></script>');
    
    //this is an approximated network lag time
    setTimeout(O.set_content_text,500);
}

O.set_content_text = function(text,attempt_index){
    var attempt_index = attempt_index || 0;
    //gets body text either from func argument or tumblr
    var text = text || function(){
        if (attempt_index < 15) {
            try {
                return tumblr_api_read.posts[0]["regular-body"]
            } catch(error) {
                // console.log(error)
                if (attempt_index < 1) {
                    console.log("Loading...");
                }
                attempt_index += 1;
                //console.log("Attempt Index: ",attempt_index)
                setTimeout(function(){
                    O.set_content_text(text,attempt_index)
                },500)
            }
        } else {
            //replace with alt error message soon
            return O.tree.error_messages.connection_failure
        }
    }

    $('#content_body').html(text);
    tumblr_api_read = ""
}

//experimental stuff

O.footerToggle = function(){
    $('.footer').toggle();
};


O.change_section_outward = function (){
    
    if(O.tree.currentCenter.parent) {
       O.tree.navigateTo(O.tree.currentCenter.parent) 
    }

}

O.change_section_inward = function (){

    if (O.tree.currentCenter.children.length > 0) {
        O.tree.navigateTo(O.tree.currentCenter.children[0])
    } else {
        O.change_section_down();
    }
    

}

O.change_section_up = function(){
    //moves to the left node

    //checks if current node is not "home"
    if (O.tree.currentCenter.label !== "") {
        O.tree.navigateTo(O.tree.currentCenter.right)
    } else {
        //or moves to first child of center node.
        O.tree.navigateTo(O.tree.currentCenter.children[0])
    }
    //returns the new center node.
    return O.tree.currentCenter
}

O.change_section_down = function(){
    //moves to right node

    //checks if current node is not "home"
    if (O.tree.currentCenter.label !== "") {
        O.tree.navigateTo(O.tree.currentCenter.right)
    } else {
        //or moves to first child of center node.
        O.tree.navigateTo(O.tree.currentCenter.children[0])
    }
    //returns the new center node.
    return O.tree.currentCenter
}

O.set_keyboard_bindings = function(){

    //set left keydown behavior
    $(document).keydown(function(e){
        if (e.keyCode == 38) { 
           O.change_section_up()
           return false;
        }
    });

    //set right keydown behavior
    $(document).keydown(function(e){
        if (e.keyCode == 40) { 
           O.change_section_down()
           return false;
        }
    });

    //set right keydown behavior
    $(document).keydown(function(e){
        if (e.keyCode == 39) { 
           O.change_section_inward()
           return false;
        }
    });

    //set left keydown behavior
    $(document).keydown(function(e){
        if (e.keyCode == 37) { 
           O.change_section_outward()
           return false;
        }
    });
}

// =====================================
// ====== ONLOAD FUNCTION CALLS ========
// =====================================

$(function() {

    //default content becomes visible
    setTimeout(function(){$('#default_content').show(100)},5000);
    
    var config = {
        localApiCache: 'content.json',
    };

    O.tree = new BubbleTree({
        data: O.content,
        container: '.bubbletree',
        config: config,
    });

    //set key bindings
    O.set_keyboard_bindings();
    
});