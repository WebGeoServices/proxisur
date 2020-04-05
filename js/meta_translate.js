var translateMeta = function() {
    if (document.getElementById("metatitle1")){document.getElementById("metatitle1").setAttribute("content", jsI18n.t('meta-title'));}
    if (document.getElementById("metatitle2")){document.getElementById("metatitle2").setAttribute("content", jsI18n.t('meta-title'));}
    if (document.getElementById("metatitle3")){document.getElementById("metatitle3").setAttribute("content", jsI18n.t('meta-title'));}

    if (document.getElementById("metadesc1")){document.getElementById("metadesc1").setAttribute("content", jsI18n.t('meta-description'));}
    if (document.getElementById("metadesc2")){document.getElementById("metadesc2").setAttribute("content", jsI18n.t('meta-description'));}
    if (document.getElementById("metadesc3")){document.getElementById("metadesc3").setAttribute("content", jsI18n.t('meta-description'));}
    if (document.getElementById("logo-header")){document.getElementById("logo-header").setAttribute("src", jsI18n.t('logo-img'))}

    if (document.getElementById("notice-img")) {
        document.getElementById("notice-img").setAttribute("src", jsI18n.t('notice-img'));
    }
};

