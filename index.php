<?php
$project_name = 'Vicino e sicuro';
$title_suffix = 'Consegne a domicilio';
$description_pre = 'La mappa di tutti gli esercizi commerciali che offrono servizi a domicilio';
$description_post = '. Per combattere l’emergenza Coronavirus dobbiamo restare alla giusta distanza dagli altri, ma non essere distanti.';
$url = 'https://vicinoesicuro.it/';
$share_image = 'https://vicinoesicuro.it/images/share.png';
$path = strtok($_SERVER["REQUEST_URI"], '?');
$path = str_replace("/", "", $path);

switch ($path) {
    case 'abruzzo':
        $city = 'in Abruzzo';
        $title = $project_name.' - '.$title_suffix.' '.$city;
        $description = $description_pre.' '.$city.$description_post;
        $url = $url.$path;
        break;
    case 'barletta-andria-trani':
        $city = 'a Barletta-Andria-Trani e provincia';
        $title = $project_name.' - '.$title_suffix.' '.$city;
        $description = $description_pre.' '.$city.$description_post;
        $url = $url.$path;
        break;
    case 'ferrara':
        $city = 'a Ferrara e provincia';
        $title = $project_name.' - '.$title_suffix.' '.$city;
        $description = $description_pre.' '.$city.$description_post;
        $url = $url.$path;
        break;
    case 'genova':
        $city = 'a Genova e provincia';
        $title = $project_name.' - '.$title_suffix.' '.$city;
        $description = $description_pre.' '.$city.$description_post;
        $url = $url.$path;
        break;
    case 'milano':
        $city = 'a Milano e provincia';
        $title = $project_name.' - '.$title_suffix.' '.$city;
        $description = $description_pre.' '.$city.$description_post;
        $share_image = 'https://vicinoesicuro.it/images/share_'.$_GET["s"].'.png';
        $url = $url.$path;
        break;
    case 'modena':
        $city = 'a Modena e provincia';
        $title = $project_name.' - '.$title_suffix.' '.$city;
        $description = $description_pre.' '.$city.$description_post;
        $url = $url.$path;
        break;
    case 'reggioemilia':
        $city = 'a Reggio Emilia e provincia';
        $title = $project_name.' - '.$title_suffix.' '.$city;
        $description = $description_pre.' '.$city.$description_post;
        $url = $url.$path;
        break;
    case 'torino':
        $city = 'a Torino e provincia';
        $title = $project_name.' - '.$title_suffix.' '.$city;
        $description = $description_pre.' '.$city.$description_post;
        $url = $url.$path;
        break;
    default:
        $title = $project_name.' - Sostieni i negozi della tua città, restando a casa';
        $description = 'La mappa di tutti gli esercizi commerciali che offrono servizi a domicilio. Per combattere l’emergenza Coronavirus dobbiamo restare alla giusta distanza dagli altri, ma non essere distanti.';
        break;
}
?>

<html>

<head>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-15432145-4"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-15432145-4');
        ga('set', 'anonymizeIp', true);
    </script>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title><?php echo $title; ?></title>
    <meta name="title" content="<?php echo $title; ?>">
    <meta name="description" content="<?php echo $description; ?>">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo $url; ?>">
    <meta property="og:title" content="<?php echo $title; ?>">
    <meta property="og:description" content="<?php echo $description; ?>">
    <meta property="og:image" content="<?php echo $share_image; ?>">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="<?php echo $url; ?>">
    <meta property="twitter:title" content="<?php echo $title; ?>">
    <meta property="twitter:description" content="<?php echo $description; ?>">
    <meta property="twitter:image" content="<?php echo $share_image; ?>">

    <link rel="apple-touch-icon" sizes="57x57" href="/images/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/images/favicon//apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon//apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon//apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/images/favicon//apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/images/favicon//apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon//apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon//apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon//apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon//android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon//favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon//favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon//favicon-16x16.png">
    <link rel="manifest" href="/images/favicon//manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/images/favicon//ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <!-- STYLESHEET -->
    <link rel="stylesheet" href="/css/bs.css">
    <link rel="stylesheet" href="/css/style_v3.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://webapp.woosmap.com/webapp.js"></script>
    <script src="https://www.google.com/jsapi"></script>

</head>

<body>

    <div class="wrap">
        <header id="header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <strong class="logo"><a href="/"><img src="/images/logo_header.png" alt="Vicinoesicuro"></a></strong>
                    </div>
                    <div class="col-6 alignright">
                        <a href="https://forms.gle/wsG9SshsDqh6MfMh8" target="_blank" class="addbtn desktoponly">Inserisci un negozio</a>
                        <nav class="menu">
                            <ul class="header-menu">
                                <li><a href="/">Mappa</a></li>
                                <li><a href="https://forms.gle/wsG9SshsDqh6MfMh8" target="_blank">Inserisci un negozio</a></li>
                                <li><a href="/about">Info sul progetto</a></li>
                                <li><a href="contact">Contatti</a></li>
                                <li><a href="https://www.facebook.com/vicinoesicuro/">Seguici su Facebook</a></li>
                                <li><a href="https://www.iubenda.com/privacy-policy/30287331" target="_blank">Privacy e Cookie Policy</a></li>
                                <li class="credits"><strong>Vicino<span style="color:#D81A60;">e</span>sicuro</strong> è un progetto nato a Reggio Emilia<br />Powered by <a href="https://www.woosmap.com/" target="_blank">Woosmap</a></li>
                            </ul>
                            <div class="dropdown-btn">
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </div>
                        </nav>
                    </div>
                    <div class="col-12 mobileonly">
                        <a href="https://forms.gle/wsG9SshsDqh6MfMh8" target="_blank" class="addbtn">Inserisci un negozio</a>
                    </div>
                </div>
            </div>
            <!-- container-fluid -->
        </header>
        <!-- header -->

        <div class="map">
            <div id="store-locator" class="map-holder"></div>
        </div>
        <!-- footer -->
        <!-- footer id="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <p class="footer-copy">
                            <strong>Vicino<span style="color:#D81A60;">e</span>sicuro</strong> è un progetto nato a Reggio Emilia - Powered by <a href="https://www.woosmap.com/" target="_blank">Woosmap</a> - <a href="https://www.iubenda.com/privacy-policy/30287331" target="_blank">Privacy e Cookie Policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer -->
    </div>

    <script type="text/javascript" src="/js/scripts_v20.js"></script>
</body>

</html>