// =====================================
// ========= GLOBAL VARIBLES ===========
// =====================================

// a public alias to main tree object.

var TREE;

var last_clicked_node;

// =====================================
// ======= Load Content As JSON ========
// =====================================

var content = {
        id: 'title icon-home icon-large',
        label: '',
        amount: 50,
        callback: change_section,
        body_html: "<div id='default_content' style='display:block'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><span class='icon-long-arrow-left icon-large'/><span>  click the bubbles to get started.</div>",
        color: '#AA0000',  // color for root node, will be inherited by children 
        children: [
            { 
                label: 'code', 
                id: 'section_title icon-code icon-large',
                amount: 20,
                color: '#FFFFFF',
                callback: function(node){
                    change_section(node)
                    get_tumblr_page_json("code")
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
                    change_section(node)
                    get_tumblr_page_json("about")
                },
                children: [
                    {
                        label: 'bio', 
                        amount: 15,
                        id: 'icon-book icon-large link',
                        color: '#AA0000',
                        callback: function(){
                            get_tumblr_page_json('about');
                        }
                    },
                    {
                        label: 'press', 
                        amount: 15,
                        id: 'icon-bullhorn icon-large link',
                        color: '#AA0000',
                        callback: function(){
                            get_tumblr_page_json('press');
                        }
                    },
                    {
                        label: 'writing', 
                        amount: 15,
                        id: 'icon-file-text icon-large link',
                        color: '#AA0000',
                        callback: function(){
                            get_tumblr_page_json('writing');
                        }
                    }
                ]
            },
            { 
                label: 'media', 
                id: 'section_title icon-camera icon-large',
                amount: 20,
                color: '#FFFFFF',
                callback: change_section,
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
                    change_section(node)
                    get_tumblr_page_json("about","littleinsects.com")
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
                callback: change_section, 
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
                callback: change_section,
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


//smaller page function
function footerToggle(){
    $('.footer').toggle();
};

function change_section(node){
    set_content_text(' ')
    //default title
    var heading_name = node == "" || node.label == "" ? "developer / musician / etc" : node.label;

    var body = node.body_html || " "

    $('#sub_heading').html(heading_name);
    $('#content_body').html(body);
}

function get_tumblr_page_json(section_name,tumblr_url){
    var tumblr_url = tumblr_url || "omardelarosa.tumblr.com"
    var section_name = section_name || 'about';
    $('body').append('<script src="http://'+tumblr_url+'/'+section_name+'/json"></script>');
    
    //this is an approximated network lag time
    setTimeout(set_content_text,500);
}

function set_content_text(text,attempt_index){
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
                    set_content_text(text,attempt_index)
                },500)
            }
        } else {
            //replace with alt error message soon
            return TREE.error_messages.connection_failure
        }
    }

    $('#content_body').html(text);
    tumblr_api_read = ""
}

function go_to_home_node(){

}

function go_to_left_node(){
    //moves to the left node

    //checks if current node is not "home"
    if (TREE.currentCenter.label !== "") {
        TREE.navigateTo(TREE.currentCenter.right)
    } else {
        //or moves to first child of center node.
        TREE.navigateTo(TREE.currentCenter.children[0])
    }
    //returns the new center node.
    return TREE.currentCenter
}

function go_to_right_node(){
    //moves to right node

    //checks if current node is not "home"
    if (TREE.currentCenter.label !== "") {
        TREE.navigateTo(TREE.currentCenter.right)
    } else {
        //or moves to first child of center node.
        TREE.navigateTo(TREE.currentCenter.children[0])
    }
    //returns the new center node.
    return TREE.currentCenter
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

    TREE = new BubbleTree({
        data: content,
        container: '.bubbletree',
        config: config,
    });

    TREE.error_messages = {
            connection_failure: "" //need to add messaging here soon.
        }
    
});