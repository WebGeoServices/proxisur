var translateMeta = function() {
    document.getElementById("metatitle1").setAttribute("content", jsI18n.t('meta-title'));
    document.getElementById("metatitle2").setAttribute("content", jsI18n.t('meta-title'));
    document.getElementById("metatitle3").setAttribute("content", jsI18n.t('meta-title'));

    document.getElementById("metadesc1").setAttribute("content", jsI18n.t('meta-description'));
    document.getElementById("metadesc2").setAttribute("content", jsI18n.t('meta-description'));
    document.getElementById("metadesc3").setAttribute("content", jsI18n.t('meta-description'));
};

