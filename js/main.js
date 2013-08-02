//smaller page function
function footerToggle(){
    $('.footer').toggle();
};

$(function() {

    //data
    var data = {
        id: 'title icon-home icon-large',
        label: '',
        amount: 50,
        color: '#AA0000',  // color for root node, will be inherited by children 
        children: [
            { 
                label: 'code', 
                id: 'section_title icon-code icon-large',
                amount: 20,
                color: '#FFFFFF',
                children: [
                    {
                        label: 'github', 
                        amount: 15,
                        id: 'icon-github icon-large',
                        color: '#AA0000'
                    },
                    {
                        label: 'bitbucket', 
                        amount: 15,
                        id: 'icon-bitbucket icon-large',
                        color: '#AA0000'
                    }
                ]
            },
            { 
                label: 'info', 
                id: 'section_title icon-male icon-large',
                amount: 20,
                color: '#FFFFFF',
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
                children: [
                    {
                        label: 'instagram', 
                        amount: 15,
                        id: 'icon-instagram icon-large',
                        color: '#AA0000'
                    },
                    {
                        label: 'flickr', 
                        amount: 15,
                        id: 'icon-flickr icon-large',
                        color: '#AA0000'
                    }
                ]
            },
            { 
                label: 'music', 
                id: 'section_title icon-music icon-large',
                amount: 20,
                color: '#FFFFFF',
                children: [
                    {
                        label: 'solo',
                        amount: 15,
                        id: 'solo-music icon-male icon-large',
                        color: '#AA0000'
                    },
                    {
                        label: 'little insects',
                        amount: 15,
                        id: 'little-insects icon-play icon-large',
                        color: '#AA0000'
                    }
                ]
            },
            {   
                label: 'blogs',
                amount: 20,
                color: '#FFFFFF', 
                id: 'section_title icon-file-text icon-large',
                children: [
                    { 
                        label: 'tumblr',
                        amount: 15, 
                        id: 'tumblr icon-tumblr icon-large',
                        color: '#AA0000'
                    },
                    { 
                        label: 'blogger',
                        amount: 15, 
                        id: 'blogger icon-archive icon-large',
                        color: '#AA0000'
                    }

                ]
            },
            { 
                label: 'contact', 
                amount: 20, 
                color: '#FFFFFF',
                id: 'section_title icon-envelope icon-large',
                children: [
                    { 
                        label: 'email', 
                        amount: 15,
                        id: 'icon-envelope-alt icon-large',
                        color: '#AA0000'
                    },
                    { 
                        label: 'twitter', 
                        amount: 15,
                        id: 'icon-twitter icon-large',
                        color: '#AA0000'
                    },
                    { 
                        label: 'facebook', 
                        amount: 15,
                        id: 'icon-facebook icon-large',
                        color: '#AA0000'
                    },
                    { 
                        label: 'linkedin', 
                        amount: 15,
                        id: 'icon-linkedin icon-large',
                        color: '#AA0000'
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