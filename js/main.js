// =====================================
// ========= GLapp.AL VARIBLES ===========
// =====================================

// a global object for encapsulation purposes.
var app = app || {};

app = {

    initialize: function(){

        //default content becomes visible
        setTimeout(function(){$('#default_content').show(100)},5000);

        //attempt to get a node tree
        app.get_tree();

        //set left keydown behavior
        $(document).keydown(function(e){
            if (e.keyCode == 38) { 
               app.change_section_up()
               return false;
            }
        });

        //set right keydown behavior
        $(document).keydown(function(e){
            if (e.keyCode == 40) { 
               app.change_section_down()
               return false;
            }
        });

        //set right keydown behavior
        $(document).keydown(function(e){
            if (e.keyCode == 39) { 
               app.change_section_inward()
               return false;
            }
        });

        //set left keydown behavior
        $(document).keydown(function(e){
            if (e.keyCode == 37) { 
               app.change_section_outward()
               return false;
            }
        });

        //if window is resized from a smaller viewport to a large enough viewport, attempt to build a tree
        $(window).resize(function() {
            //if window is large enough
            app.get_tree();
        });


    },
    // =====================================
    // ======= Load Content as JSON ========
    // =====================================

    //load the content as JSON
    content: {
        id: 'title icon-home icon-large',
        label: '',
        amount: 50,
        callback: app.change_section,
        body_html: "<div id='default_content' style='display:block'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><span class='icon-long-arrow-left icon-large'/><span>  click the bubbles to get started.</div>",
        color: '#AA0000',  // color for root node, will be inherited by children 
        children: [
            { 
                label: 'code', 
                id: 'section_title icon-code icon-large',
                amount: 20,
                color: '#FFFFFF',
                callback: function(node){
                    app.change_section(node)
                    app.get_tumblr_page_json("code")
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
                    app.change_section(node)
                    app.get_tumblr_page_json("about")
                },
                children: [
                    {
                        label: 'bio', 
                        amount: 15,
                        id: 'icon-book icon-large link',
                        color: '#AA0000',
                        callback: function(){
                            app.get_tumblr_page_json('about');
                        }
                    },
                    {
                        label: 'press', 
                        amount: 15,
                        id: 'icon-bullhorn icon-large link',
                        color: '#AA0000',
                        callback: function(){
                            app.get_tumblr_page_json('press');
                        }
                    },
                    {
                        label: 'writing', 
                        amount: 15,
                        id: 'icon-file-text icon-large link',
                        color: '#AA0000',
                        callback: function(){
                            app.get_tumblr_page_json('writing');
                        }
                    }
                ]
            },
            { 
                label: 'media', 
                id: 'section_title icon-camera icon-large',
                amount: 20,
                color: '#FFFFFF',
                callback: app.change_section,
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
                    app.change_section(node)
                    app.get_tumblr_page_json("about","littleinsects.com")
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
                callback: app.change_section, 
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
                callback: app.change_section,
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
    },

    // =====================================
    // ===== GLOBAL HELPER FUNCTIONS =======
    // =====================================

    get_tree: function(){
        //if screen is large enough and there is no tree
        if ($(document).width() > 960 && $(document).height() > 480 && !app.tree) {
                //make bubble tree
                app.tree = new BubbleTree({
                    data: app.content,
                    container: '.bubbletree'
                });
            }
    },

    change_section: function(node){
        $('#content_body').text(' ')
        //default title
        var heading_name = node == "" || node.label == "" ? "developer / musician / etc" : node.label;

        var body = node.body_html || " "

        $('#sub_heading').html(heading_name);
        $('#content_body').html(body);
        $('#content_body').css({
            "overflow":"hidden"
        })

    },

    get_tumblr_page_json: function(section_name,tumblr_url){
    
        var tumblr_url = tumblr_url || "http://omardelarosa.tumblr.com",
            section_name = section_name || 'about',
            url_concat = tumblr_url+"/"+section_name+"/json";

        $('#content_body').tumblrize(url_concat,function(e,target){
            target.mCustomScrollbar();
        });

    },

    //experimental stuff

    footerToggle: function(){
        $('.footer').toggle();
    },

    change_section_outward: function (){
        if(app.tree.currentCenter.parent) {
           app.tree.navigateTo(app.tree.currentCenter.parent) 
        }
    },

    change_section_inward: function (){
        if (app.tree.currentCenter.children.length > 0) {
            app.tree.navigateTo(app.tree.currentCenter.children[0])
        } else {
            app.change_section_down();
        }
    },

    change_section_up: function(){
        //moves to the left node

        //checks if current node is not "home"
        if (app.tree.currentCenter.label !== "") {
            app.tree.navigateTo(app.tree.currentCenter.right)
        } else {
            //or moves to first child of center node.
            app.tree.navigateTo(app.tree.currentCenter.children[0])
        }
        //returns the new center node.
        return app.tree.currentCenter
    },

    change_section_down: function(){
        //moves to right node

        //checks if current node is not "home"
        if (app.tree.currentCenter.label !== "") {
            app.tree.navigateTo(app.tree.currentCenter.right)
        } else {
            //or moves to first child of center node.
            app.tree.navigateTo(app.tree.currentCenter.children[0])
        }
        //returns the new center node.
        return app.tree.currentCenter
    }

};

// =====================================
// ====== ON DOCUMENT READY CALLS ======
// =====================================

$(function() {

    //set key bindings
    app.initialize();


    
});