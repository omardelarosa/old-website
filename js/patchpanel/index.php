<?php
$OAuth = array(
    'oauth_uri' => 'https://accounts.google.com/o/oauth2/auth',
    'client_id' => '873007694295.apps.googleusercontent.com',
    'redirect_uri' => 'http://www.omardelarosa.com/js/patchpanel/index.php' );
$title = 'No Code';
$AuthCode = 'Null';

// see if error parameter exisits
$error = _get_url_param($_SERVER['REQUEST_URI'], 'error');
if ($error != NULL)
{   // this means the user denied api access to GWMTs
    $title = $error;
}
else
{   // does the code parameter exist?
    $AuthCode = _get_url_param($_SERVER['REQUEST_URI'], 'code');
    if ($AuthCode == NULL)
    {   // get authorization code
        $OAuth_request = _formatOAuthReq($OAuth,
                        "https://www.google.com/webmasters/tools/feeds/sites/");

        header('Location: ' . $OAuth_request);
        exit; // the redirect will come back to this page and $code will have a value
    }
    else
    {
        $title = 'Got Authorization Code';
    }
}

function _formatOAuthReq($OAuthParams, $scope)
{
    $uri = $OAuthParams['oauth_uri'];
    $uri .= "?client_id=" . $OAuthParams['client_id'];
    $uri .= "&redirect_uri=" . $OAuthParams['redirect_uri'];
    $uri .= "&scope=" . $scope;
    $uri .= "&response_type=code";

    return $uri;
}

function _get_url_param($url, $name)
{
    parse_str(parse_url($url, PHP_URL_QUERY), $params);
    return isset($params[$name]) ? $params[$name] : null;
}


?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title><?php $title; ?></title>
    </head>
    <body>
        <h1>OAuth2 Authorization Code</h1>
        <p>Code = <?php $code; ?></p>

    </body>
</html>