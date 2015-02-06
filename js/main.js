// =====================================
// ========= GLapp.AL VARIBLES ===========
// =====================================

// a global object for encapsulation purposes.
var app = app || {};

app = {

    initialize: function(){

        // get github repos, etc.
        app.get_github_repos(app.get_tree);

        //default content becomes visible
        setTimeout(function(){$('#default_content').show(100)},5000);

        //attempt to get a node tree
        // app.get_tree();

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
                id: 'section_title icon-code icon-large link',
                amount: 20,
                color: '#FFFFFF',
                callback: function(node){
                    app.render_code_stats()
                },
                // set using app.get_github_repos
                children: []
            },
            { 
                label: 'projects', 
                id: 'section_title icon-gear icon-large link',
                amount: 20,
                color: '#FFFFFF',
                children: [
                    {
                        label: 'pitchfork metrics',
                        id: 'section_title icon-file icon-large link',
                        amount: 10,
                        color: '#FFFFFF',
                        callback: function(node) {
                            app.get_blogger_post("/2015/01/pitchfork-metrics.html",
                                function(data){
                                    app.set_content_html(data.content)
                                })
                        },
                        children: []
                    },
                    {
                        label: 'pitchfork npm',
                        id: 'section_title icon-file icon-large link',
                        amount: 10,
                        readmepath: '/md/pitchfork-npm-readme.md',
                        color: '#FFFFFF',
                        callback: function(node) {
                            app.get_blogger_post("/2014/07/pitchfork-api-for-node.html",
                                function(data){
                                    app.set_content_html(data.content)
                                })
                        },
                        children: []
                    },
                    {
                        label: 'hubot simpsons',
                        id: 'section_title icon-file icon-large link',
                        amount: 10,
                        color: '#FFFFFF',
                        readmepath: '/md/thesimpsons-readme.md',
                        callback: function(node) {
                            app.get_markdown(this.readmepath, function(md, html){
                                if (html) {
                                    app.set_content_html(html);
                                }
                            })
                        },
                        children: []
                    },
                    {
                        label: 'tonka',
                        id: 'section_title icon-file icon-large link',
                        amount: 10,
                        color: '#FFFFFF',
                        readmepath: '/md/tonka-readme.md',
                        callback: function(node) {
                            app.get_markdown(this.readmepath, function(md, html){
                                if (html) {
                                    app.set_content_html(html);
                                }
                            })
                        },
                        children: []
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
                        id: 'tumblr icon-tumblr icon-large',
                        color: '#AA0000',
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

    get_github_repos: function(cb){

        var reposRaw = [];
        var pageNum = 1;

        function handleAjax(res, status, req){
            
            if (res.length == 0) return buildRepoNodes(reposRaw);
            reposRaw.push(res);
            pageNum+=1;
            $.getJSON("https://api.github.com/users/omardelarosa/repos?page="+pageNum, handleAjax)
                .fail(function(){
                    console.log('Github rate limit has likely been hit.')
                })
        }

        function buildRepoNodes() {
            var repos = _.flatten(reposRaw);
            var sortedRepos = {};
            var codeNode = _.where(app.content.children, {"label": "code"})[0];
            _.each(repos, function(repo){
                if (!repo.private) {
                    var language = repo.language || "Other";
                    // create a language section if there isn't one
                    if (!sortedRepos.hasOwnProperty(language)) {
                        sortedRepos[language] = [];
                    }
                    sortedRepos[language].push(repo);
                }
            })
            app.repos = sortedRepos;

            _.each(sortedRepos, function(value, key){
                var repos = value;
                var language = key;

                var languageChild = {
                    label: key,
                    amount: repos.length > 8 ? repos.length : 8,
                    id: 'icon-github icon-large link',
                    color: '#AA0000',
                    callback: function (tree) {
                        var htmlArr = ["<div class='repos'>"];
                        var currentNode = tree.currentCenter
                        htmlArr.push("<h2>"+language+" Repos</h2>")
                        repos.forEach(function(repo){
                            htmlArr.push("<h3 class='repo_meta'><a href='#"+app.bubble_name_truncate(repo.name,8,true)+"'>"+repo.name+"</a></h3>");
                        })
                        htmlArr.push("</div>")
                        html = htmlArr.join("");
                        app.set_content_html(html);
                    },
                    children: []
                }

                repos.forEach(function(repo, idx){
                    if (repo.fork) return;
                    var repo = repo;

                    var iconClass = repo.fork ? 'octicon octicon-repo-forked' : 'octicon octicon-repo link';

                    var repoChild = {
                        label: app.bubble_name_truncate(repo.name),
                        amount: app.bubble_size_adjust(repo.name, repos.length),
                        id: iconClass,
                        color: '#FFFFFF',
                        repo: repo,
                        callback: function(){
                            $.getJSON(repo.url+"/collaborators", function(res, status, req){
                                var collaboratorsList = ["<ul class='collaborators'>"];

                                res.forEach(function(user){
                                    var collabHtml = [
                                        "<li>",
                                            "<a href='",user.html_url,"'",
                                                "<img class='collaborator_image' src='", user.avatar_url, "'/>",
                                            "</a>",
                                        "</li>" 
                                        ].join("")
                                    collaboratorsList.push(collabHtml);
                                })

                                // close element
                                collaboratorsList.push("</ul>")

                                var homePageTag = function(repo) {
                                    if (!repo.homepage) return "";
                                    return "<a href='"+app.url_normalize(repo.homepage)+"'>"+repo.homepage+"</a>"
                                }

                                var html = [
                                    "<h2 class='repo_heading'>",
                                        "<a href='",repo.html_url,"' target='_blank'>",repo.name,"</a>",
                                    "</h2>",
                                    "<div>",
                                        "<p class='repo_meta'>",
                                            "<h4>Homepage</h4>", 
                                            "<p>",homePageTag(repo),"</p>",
                                        "</p>",
                                        "<p class='repo_meta'>",
                                            "<h4>Description:</h4>", 
                                            "<p>", repo.description,"</p>", 
                                        "</p>",
                                        "<p class='repo_meta'>",
                                            "<h4>Collaborators:</h4>",
                                            "<p>", collaboratorsList.join(""), "</p>", 
                                        "</p>",
                                    "</div>"
                                ].join("")
                                app.set_content_html(html)
                            })
                        }
                    }
                    languageChild.children.push(repoChild)
                })
                if (languageChild.children.length < 2) {
                    // prevents issue with one-children nodes not rendering correctly
                    var extraChild = {
                        label: '', 
                        amount: 3,
                        id: 'icon-home icon-large link',
                        color: '#FFFFFF',
                        children: [],
                        callback: function(){
                            app.tree.navigateTo(app.tree.nodesByUrlToken["0"])
                        }
                    }
                    languageChild.children.push(extraChild);
                }
                codeNode.children.push(languageChild);
            })
            app.get_blogger_data(cb)
        }

        $.getJSON("https://api.github.com/users/omardelarosa/repos?page="+pageNum, handleAjax)
    },

    render_code_stats: function() {
        var html = [ "<div>" ];
        var lengthOrMax = function(list, max, scale, shift){
            var scale = scale || 1;
            var shift = shift || 0;
            return (list.length*scale)+shift <= max ? (list.length*scale)+shift : max;
        }
        // TODO: toggle sorts
        var langs = []
        var total = 0;
        _.each(app.repos, function (repoList, langName) {
            var lang = {
                name: langName,
                repoCount: repoList.length
            }
            // add to total
            total += lang.repoCount;
            var langHtml = [
                "<span style=''>", 
                    "<strong>",langName, "</strong>: ", repoList.length, " repos</span>",
                "<p style='background-color: rgb(",
                        lengthOrMax(repoList, 255, 3, 5),"5,",
                        lengthOrMax(repoList, 255, 1),"0,0); width: ", 
                    // set the width of bar
                    lengthOrMax(repoList, 10), "0%;' >", 
                    "&nbsp;", 
                "</p>",

            ].join("")
            lang.html = langHtml
            langs.push(lang)
        })
        var sortedLangs = _.sortBy(langs, function(lang){
            return lang.repoCount*-1
        });
        sortedLangs.forEach(function(lang){
            html.push(lang.html);
        })
        html.push("<p><strong>Total:</strong> "+total+" repos</p></div>");
        html = html.join("");
        app.set_content_html(html);
    },

    get_markdown: function(path, cb) {
        var md, html;
        $.get(path)
            .then(function(data){
                // calls the cb function with the raw markdown as the 1st arg and html as 2nd
                md = data;
                if (marked) {
                    html = marked(data)
                } else {
                   html = null 
                }
                cb(data, marked(data))
            })
    },

    get_blogger_data: function(cb){
        $.getJSON("https://www.googleapis.com/blogger/v3/blogs/3160138467753157166/posts?key=AIzaSyCcC2Lqz8WTFad5T3V5G-Yl-e_sRfopr8k")
            .then(function(data){
                // console.log(data);
                var posts = data.items;
                app.build_blogger_nodes(posts, cb)
                // app.set_content_html(data.items[0].content);
            })
    },

    get_blogger_post: function(path, cb){
        if (!path) { return new Error('no path provided!')}
        var counter = 0;
        var url = "https://www.googleapis.com/blogger/v3/blogs/3160138467753157166/posts/bypath?key=AIzaSyCcC2Lqz8WTFad5T3V5G-Yl-e_sRfopr8k&path="+path;
        
        function fetchContent () {
            $.getJSON(url)
                .then(function(data){
                    cb(data);
                    console.log("data", data)
                }).fail(function(err){
                    console.log("counter", counter);
                    if (counter < 10) {
                        fetchContent()
                        counter += 1;
                    } else {
                        console.log('error fetching content')
                    }
                })
        }
        fetchContent();
    },

    build_blogger_nodes: function(posts, cb){
        var bloggerNode = _.where(_.where(app.content.children, {"label": "blogs"})[0].children, {"label": "blogger"})[0]
        var children = [];
        posts.forEach(function(post, idx){
            var postNode = {
                label: (idx+1).toString(),
                amount: 5,
                content: post.content,
                post: post,
                id: "icon-pencil icon-large link",
                color: "#FFFFFF",
                callback: function(tree) {
                    var thisNode = tree.currentCenter
                    var htmlArr = [
                        "<h2 class='blog_post_heading'>", 
                            "<a href='#", (idx+1),"' target='_blank'>",
                            thisNode.post.title,
                            "</a>",
                        "</h2>",
                        "<div class='blog_post_content'>", thisNode.content, "</div>"
                    ]
                    app.set_content_html(htmlArr.join(""));
                }
            }
            children.push(postNode);
        })


        // TODO: implement a smarter sort system
        bloggerNode.children = _.sortBy(children, function(postNode){
            return moment(postNode.post.published).unix(Number)
        });
        
        // set Blogger Node Callback
        function renderBlogIndex (tree) {
            var currentNode = tree.currentCenter;
            var htmlArr = [
                "<h2>Last 10 Posts:</h2>",
                "<ul class='blog_post_list'>"
            ]

            currentNode.children.forEach(function(postNode, idx){
                var post = postNode;
                var postHtmlArr = [
                    "<li class='blog_post_listing'>",
                        "<h5>",
                        (idx+1), ": ","<a href='#",postNode.urlToken,"'>",  postNode.post.title ,"</a>",
                        "<span class='blog_listing_timestamp'> (", moment(postNode.post.published,"YYYYMMDD").fromNow(), ") </span>",
                        "</h5>",
                    "</li>"
                ];
                htmlArr.push(postHtmlArr.join(""))
            })

            // close list
            htmlArr.push("<li>&nbsp;</li><li><a href='http://blog.omardelarosa.com' target='_blank'>More Posts</a></li>")
            htmlArr.push("</ul>")

            app.set_content_html(htmlArr.join(""))
        }

        bloggerNode.callback = renderBlogIndex


        app.get_tumblr_posts(cb);
    },

    get_tumblr_posts: function (cb) {
        var tumblrDataUrl = "http://api.tumblr.com/v2/blog/omardelarosa.tumblr.com/posts?api_key=Ijw3Ewm7iwga9WL1Pjo3hCwS7o388iYel1nuEMPdmGYA8P51CP"
        $.ajax({
            url: tumblrDataUrl,
            dataType: "jsonp"
        })
        .then(function(res, status, req){
            var posts = res.response.posts;
            app.render_tumblr_post_nodes(posts, cb)
        })
    },

    render_tumblr_post_nodes: function (posts, cb) {
        var tumblrNode = _.where(_.where(app.content.children, {"label": "blogs"})[0].children, {"label": "tumblr"})[0]
        var children = [];

        function normalize_tumblr_content (post) {
            // parse tumblr content

            var type = post.type;

            var timeStamp = [
                "<p class='tumblr_timestamp'>(",
                    moment(post.timestamp,"X").fromNow(),
                ")</p>"
            ].join("")

            var content = [ timeStamp, "<div class='tumblr_post'>" ];


            switch (type) {
                case "text":
                    content.push(post.body)
                    break;
                case "quote":
                    content.push(
                        [ "<h5 class='quote_text'>",
                                post.text,
                            "</h5>",
                            "<p>",post.source, "</p>"
                        ].join("")
                    )
                    break;
                case "link":
                    content.push(
                        [ "<h5 class='link_url'>",
                                "<a href='",post.url,"'>", post.title,"</a>",
                            "</h5>",
                            "<p>",post.description, "</p>"
                        ].join("")
                    )
                    break;
                case "answer":
                    content.push(
                        [ "<h5 class='question_text'>",
                                post.question,
                            "</h5>",
                            "<p class='question_answer'>",post.answer, "</p>"
                        ].join("")
                    )
                    break;
                case "video":
                    var playerTag = [
                        "<div class='tumblr_video_player'>",
                            post.player,
                        "</div>"
                    ].join("")
                    content.push(playerTag)
                    break;
                case "audio":
                    var playerTag = [
                        "<div class='tumblr_audio_player'>",
                            post.player,
                        "</div>"
                    ].join("")
                    content.push(playerTag)
                    break;
                case "photo":
                    var photoTags = ["<ul class='tumblr_photo_list'>"];
                    post.photos.forEach(function(photo){
                        var photoTag = [
                            "<li class='tumblr_photo_listing'>",
                                "<img class='tumblr_photo' src='",photo.alt_sizes[2].url,"'/>",
                            "</li>"
                        ].join("")
                        photoTags.push(photoTag)
                    })
                    photoTags.push("</ul>")
                    content.push(photoTags.join(""));
                    break;
                // case "chat":
                //     break;
                default:
                    content.push(post.caption);
                    break;
            }
            content.push("</div>")
            return content.join("")
        }

        posts.forEach(function(post, idx){
            var postNode = {
                label: (idx+1).toString(),
                amount: 2,
                content: normalize_tumblr_content(post),
                post: post,
                timestamp: post.timestamp,
                id: "icon-tumblr icon-large link",
                color: "#FFFFFF",
                callback: function(tree) {
                    var thisNode = tree.currentCenter
                    var htmlArr = [
                        "<h4 class='blog_post_heading'>", 
                            "<a href='", thisNode.post.post_url ,"' target='_blank'>",
                            app.html_to_text(thisNode.post.caption),
                            "</a>",
                        "</h4>",
                        "<div class='blog_post_content'>", thisNode.content, "</div>"
                    ]
                    app.set_content_html(htmlArr.join(""));
                }
            }
            children.push(postNode);
        })

        // TODO: fix this
        tumblrNode.children = _.sortBy(children, "timestamp");

        // set Blogger Node Callback
        function renderBlogIndex (tree) {
            var currentNode = tree.currentCenter
            var htmlArr = [
                "<h2>Last 20 Posts:</h2>",
                "<ul class='blog_post_list'>"
            ]

            function renderStats (post) {

                function freshness(post, percentBool) {
                    var secondsInDay = 86400;
                    var fresh = Math.floor(255-(moment().unix("X")-post.timestamp)/secondsInDay);
                    if (percentBool) return (fresh/2.5);
                    return fresh;
                }

                function limit_0_to_255(num) {
                    if (num > 255) return 255;
                    if (num < 0) return 0;
                    return num;
                }

                var statsHtmlArr = [
                    "<div class='tumblr_stats'>",
                        "<h5 style='background-color: rgb(0,",
                                limit_0_to_255(
                                    freshness(post)
                                ),",60); width: ",freshness(post,true),"%''><span style='width: 200px; postion: absolute; top: 0; left: 0'>Freshness: ",freshness(post,true),"%</span></h5>",
                        "<h5 style='background-color: rgb(",
                                limit_0_to_255(
                                    post.tags.length*85
                                ),",0,60); width: ",post.tags.length,"0%''><span style='width: 200px; postion: absolute; top: 0; left: 0'>Tags: ",post.tags.length,"</span></h5>",
                    "</div>"
                ];
                return statsHtmlArr.join("")
            }

            currentNode.children.forEach(function(postNode, idx){
                var post = postNode.post;
                var postHtmlArr = [
                    "<li class='blog_post_listing'>",
                        "<h5>",
                        (idx+1), ": " , "<a href='#",postNode.urlToken,"'>",  app.html_to_text(post.caption) ,"</a>",
                        "<span class='blog_listing_timestamp'> (", moment(post.timestamp,"X").fromNow(), ") </span>",
                            renderStats(post),
                        "</h5>",
                    "</li>"
                ];
                htmlArr.push(postHtmlArr.join(""))
            })

            // close list
            htmlArr.push("<li>&nbsp;</li><li><a href='http://omardelarosa.tumblr.com' target='_blank'>More Posts</a></li>")
            htmlArr.push("</ul>")

            app.set_content_html(htmlArr.join(""))
        }


        // console.log(children)
        tumblrNode.callback = renderBlogIndex

        // load initial callback
        cb();

    },

    reset_tree: function() {
        app.tree.clean();
        //make bubble tree
        app.tree = new BubbleTree({
            data: app.content,
            container: '.bubbletree'
        });

        app.rootNode = app.tree.currentCenter;
    },

    get_tree: function(){
        //if screen is large enough and there is no tree
        if ($(document).width() > 960 && $(document).height() > 480 && !app.tree) {
                //make bubble tree
                app.tree = new BubbleTree({
                    data: app.content,
                    container: '.bubbletree'
                });

                app.rootNode = app.tree.currentCenter;
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

    set_content_html: function(html){
        var $contentBody = $('#content_body')
            $contentBody
                .html(html)
                .mCustomScrollbar();
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
    },

    bubble_size_adjust: function(text, siblingNum, scale){
        var scale = scale || 0.90;
        if (siblingNum && siblingNum > 10) return 2;
        var adjustedLength = Math.floor(text.length/scale);
        return adjustedLength < 6 ? 6 : adjustedLength;
    },

    bubble_name_truncate: function(fullName, max, dashBool) {
        if (dashBool) {
            var trailChars = "---";
        } else {
            var trailChars = "...";
        }
        var max = max || 8;
        if (fullName.length < max) return fullName 
        return fullName.slice(0,8)+trailChars;
    },

    html_to_text: function(htmlString) {
        return $(htmlString).text();
    },

    url_normalize: function(url) {
        var prefix = "http://"
        if (url.indexOf(prefix) === -1) {
            return prefix+url
        } else {
            return url;
        }
    }

};

// =====================================
// ====== ON DOCUMENT READY CALLS ======
// =====================================

$(function() {

    //set key bindings
    app.initialize();
    
});