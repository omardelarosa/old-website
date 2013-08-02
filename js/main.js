//smaller page function
function footerToggle(){
    $('.footer').toggle();
};

function change_heading(heading_name){
    //default title
    if (heading_name === "") {
        heading_name = "developer / musician / etc"
    }

    $('#sub_heading').html(heading_name);
}

$(function() {

    //data
    var data = {
        id: 'title icon-home icon-large',
        label: '',
        amount: 50,
        callback: change_heading,
        color: '#AA0000',  // color for root node, will be inherited by children 
        children: [
            { 
                label: 'code', 
                id: 'section_title icon-code icon-large',
                amount: 20,
                color: '#FFFFFF',
                callback: change_heading,
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
                callback: change_heading,
                children: [
                    {
                        label: 'bio', 
                        amount: 15,
                        id: 'icon-book icon-large',
                        color: '#AA0000'
                    },
                    {
                        label: 'press', 
                        amount: 15,
                        id: 'icon-bullhorn icon-large',
                        color: '#AA0000'
                    },
                    {
                        label: 'writing', 
                        amount: 15,
                        id: 'icon-file-text icon-large',
                        color: '#AA0000'
                    }
                ]
            },
            { 
                label: 'photos', 
                id: 'section_title icon-camera icon-large',
                amount: 20,
                color: '#FFFFFF',
                callback: change_heading,
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
                    }
                ]
            },
            { 
                label: 'music', 
                id: 'section_title icon-music icon-large',
                amount: 20,
                color: '#FFFFFF',
                callback: change_heading,
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
                callback: change_heading, 
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
                callback: change_heading,
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
    
    var config = {
        bubbleType: ['donut', 'icon', 'donut'],
        bubbleStyles: {
            'id': {}
        }
    };

    new BubbleTree({
        data: data,
        container: '.bubbletree',
        config: config
    });
    
});