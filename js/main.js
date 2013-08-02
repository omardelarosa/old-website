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
        color: '#FFFFFF',  // color for root node, will be inherited by children 
        children: [
            { 
                label: 'code', 
                id: 'section_title icon-code icon-large',
                amount: 20,
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
                label: 'music', 
                id: 'section_title icon-music icon-large',
                amount: 20,
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
                id: 'section_title icon-mail-reply-all icon-large',
                children: [
                    { 
                        label: 'email', 
                        amount: 15,
                        id: 'icon-mail-reply icon-large',
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