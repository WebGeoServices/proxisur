var storeLocatorConfig = {
  "theme": {
    "primary_color": "#D81A60"
  },
  "datasource": {
    "api_key": "woos-9aa31a07-fc32-392e-a112-bd5d7350a7e0",
    "max_responses": 5,
    "max_distance": 50000,
    "use_distance_matrix": false,
  },
  "recommendation": {
    "useRecommendation": false
  },
  "internationalization": {
    "lang": "it",
    "unitSystem": 0,
    "customTranslations": {
      "en": {
        "storeview": {
          "visitStorePage": "Visit Store Page"
        }
      }
    }
  },
  "maps": {
    "provider": "google",
    "api_key": "AIzaSyBN8I1KsGyHdCkDEHY0G4-m6wZBzVwVVr0",
    "localities": { "language": "it" },
    "geocoder": { "region": "it" },
    "disableDirections": true
  },
  "localities": {
    "language": "it",
    "componentRestrictions": {
        "country": ["it"]
    },
    "types": ["locality"],
  },
  "woosmapview": {
    "initialCenter": {
      "lat": 44.676601,
      "lng": 11.035550
    },
    "initialZoom": 8,
    "tileStyle": {
      "color": "#D81A60",
      "size": 11,
      "minSize": 5,
      "typeRules": [
        {"type": "alimentari","color": "#D81A60","zIndex":1},
        {"type": "ristorazione","color": "#D81A60","zIndex":2},
        {"type": "casa","color": "#D81A60","zIndex":3},
        {"type": "servizi","color": "#D81A60","zIndex":4},
        {"type": "farmacie","color": "#D81A60","zIndex":5}
      ]
    },
    "baseMapStyle": [
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#d3d3d3"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "color": "#808080"
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#b3b3b3"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#ffffff"
          },
          {
            "weight": 1.8
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#d7d7d7"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#ebebeb"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#a7a7a7"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#efefef"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#696969"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#737373"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#d6d6d6"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {},
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      }
    ],
    "breakPoint": 10,
    "style": {
      "rules": [
        {
          "type": "altro",
          "icon": {
            "url": "https://s3.eu-central-1.amazonaws.com/webapp-conf.woosmap.com/woos-0c78592f-13ea-362b-aa07-ba4ba9ea3dae/default.svg",
            "scaledSize": {
              "width": 24,
              "height": 24
            },
            "anchor": {
              "x": 16,
              "y": 16
            }
          },
          "selectedIcon": {
            "url": "https://s3.eu-central-1.amazonaws.com/webapp-conf.woosmap.com/woos-0c78592f-13ea-362b-aa07-ba4ba9ea3dae/selected.svg",
            "scaledSize": {
              "width": 32,
              "height": 32
            },
            "anchor": {
              "x": 21,
              "y": 21
            }
          },
          "numberedIcon": {
            "url": "https://s3.eu-central-1.amazonaws.com/webapp-conf.woosmap.com/woos-0c78592f-13ea-362b-aa07-ba4ba9ea3dae/default.svg",
            "scaledSize": {
              "width": 32,
              "height": 32
            },
            "anchor": {
              "x": 21,
              "y": 21
            }
          }
        }
      ],
      "default": {
        "icon": {
          "url": "https://s3.eu-central-1.amazonaws.com/webapp-conf.woosmap.com/woos-0c78592f-13ea-362b-aa07-ba4ba9ea3dae/default.svg",
          "scaledSize": {
            "width": 24,
            "height": 24
          },
          "anchor": {
            "x": 16,
            "y": 16
          }
        },
        "selectedIcon": {
          "url": "https://s3.eu-central-1.amazonaws.com/webapp-conf.woosmap.com/woos-0c78592f-13ea-362b-aa07-ba4ba9ea3dae/selected.svg",
          "scaledSize": {
            "width": 32,
            "height": 32
          },
          "anchor": {
            "x": 21,
            "y": 21
          }
        }
      }
    }
  },
  "filters": {
    "filters": [
      {
        "propertyType": "tag",
        "title": {
          "it": ""
        },
        "choices": [
          {"key": "abbigliamento","it": "Abbigliamento"},
          {"key": "bar_gelateria","it": "Bar / Gelateria"},
          {"key": "edicola_cartoleria","it": "Edicola / Cartoleria"},
          {"key": "elettronica_telefonia","it": "Elettronica / Telefonia"},
          {"key": "farmacia_erboristeria","it": "Farmacia / Erboristeria"},
          {"key": "fiorista","it": "Fiorista"},
          {"key": "forno","it": "Forno"},
          {"key": "generi_alimentari","it": "Generi alimentari"},
          {"key": "hobby_e_tempo_libero","it": "Hobby e tempo libero"},
          {"key": "igiene_e_bellezza","it": "Igiene e Bellezza"},
          {"key": "lavanderia","it": "Lavanderia"},
          {"key": "ottico","it": "Ottico"},
          {"key": "per_gli_animali","it": "Per gli animali"},
          {"key": "per_il_bambino","it": "Per il bambino"},
          {"key": "per_la_casa","it": "Per la casa"},
          {"key": "ristorazione","it": "Ristorazione"},
          {"key": "supermercato","it": "Supermercato"},
          {"key": "altro","it": "Altro"}
        ],
        "innerOperator": "or"
      }/*,
      {
        "propertyType": "type",
        "title": {
          "it": "Scegli una provincia"
        },
        "choices": [
          {"key": "ferrara","it": "Ferrara"},
          {"key": "mantova","it": "Mantova"},
          {"key": "modena","it": "Modena"},
          {"key": "reggioemilia","it": "Reggio Emilia"},
          {"key": "rovigo","it": "Rovigo"}
        ],
        "innerOperator": "or"
      } */
    ],
    "outerOperator": "and"
  }
}

// Nome
const getName = function (store) {
    let name = store.properties.name;
    return '<header><h4>' + name + '</h4></header>';
};

// Indirizzo
const getAddress = function (store) {
    let address = store.properties.address.lines;
    return '<p class="storeInfo getAddress"><strong>Indirizzo</strong><br />' + address + '</p>';
};

const getAddressNoTitle = function (store) {
    let address = store.properties.address.lines;
    return '<p class="storeInfo getAddressNoTitle">' + address + '</p>';
};

// Telefono
const getPhone = function (store) {
    let phone = store.properties.contact.phone;
    let html = "";
    if (phone)
      html += '<p class="storeInfo getPhone"><strong>Recapiti telefonici</strong><br />' + phone + '</p>';
    return html;
}

// Sito e email
const getContacts = function (store) {
    let email = store.properties.contact.email;
    let website = store.properties.contact.website;
    let html = "";
    // html += getPhone(store);
    if (email) html += '<p class="storeInfo getEmail"><a href="mailto:' + email + '" class="btn">Invia email</a></p>';
    if (website) html += '<p class="storeInfo getWebsite"><a href="http://' + website + '" class="btn">Sito web</a></p>';
    return '<div class="">' + html + '</div><br>';
};

// Zone
const getShipsToWhere = function (store) {
    let where = store.properties.user_properties.where;
    return '<p class="storeInfo getShipsToWhere"><strong>Quali zone ti rendi disponibile a servire</strong><br />' + where.replace('\n','<br>') + '</p>';
};

// Costi
const getShipsToCost = function (store) {
    let cost = store.properties.user_properties.cost;
    return '<p class="storeInfo getShipsToCost"><strong>Costo</strong><br />' + cost.replace('\n','<br>') + '</p>';
};

const tagLabels = {
    "abbigliamento": "Abbigliamento",
    "bar_gelateria": "Bar / Gelateria",
    "edicola_cartoleria": "Edicola / Cartoleria",
    "elettronica_telefonia": "Elettronica / Telefonia",
    "farmacia_erboristeria": "Farmacia / Erboristeria",
    "fiorista": "Fiorista",
    "forno": "Forno",
    "generi_alimentari": "Generi alimentari",
    "hobby_e_tempo_libero": "Hobby e tempo libero",
    "igiene_e_bellezza": "Igiene e Bellezza",
    "lavanderia": "Lavanderia",
    "ottico": "Ottico",
    "per_gli_animali": "Per gli animali",
    "per_il_bambino": "Per il bambino",
    "per_la_casa": "Per la casa",
    "ristorazione": "Ristorazione",
    "supermercato": "Supermercato",
    "altro": "Altro"
};
const getTags = function (store) {
    let tagsHTMLList = '';
    if (store.properties && store.properties.tags.length > 0) {
      tagsHTMLList = '<p class="storeInfo getTags"><strong>Categorie merceologiche</strong><br />';
      for (let tag in store.properties.tags) {
        if (tagLabels[store.properties.tags[tag]]) {
          tagsHTMLList += '<span>' + tagLabels[store.properties.tags[tag]] + '</span><br>';
        }
      }
      tagsHTMLList += '&nbsp;</p>';
    }
    return tagsHTMLList;
};

const getTagsNoTitle = function (store) {
    let tagsHTMLList = '';
    if (store.properties && store.properties.tags.length > 0) {
      tagsHTMLList = '<p class="storeInfo getTagsNoTitle">';
      for (let tag in store.properties.tags) {
        if (tagLabels[store.properties.tags[tag]]) {
          tagsHTMLList += '<span>' + tagLabels[store.properties.tags[tag]] + '</span><br>';
        }
      }
      tagsHTMLList += '&nbsp;<br>';
      tagsHTMLList += '<span class="btn">Vedi maggiori informazioni</span></p>';
    }
    return tagsHTMLList;
};

const getCategories = function (store) {
    const getCategories = store.properties.types[0];
    const getOtherCats = store.properties.user_properties.other_cats;
    // if (getOtherCats) other_cats = '<strong>:</strong> ' + getOtherCats;
    // return '<p class="storeInfo getCategories">'+getCategories+'</p>'; */
    if (getCategories == 'Altro') {
      return '<p class="storeInfo getCategories"><strong>Categoria merceologica</strong><br />'+getCategories+': '+getOtherCats+'</p>';
    } else {
      return '<p class="storeInfo getCategories"><strong>Categoria merceologica</strong><br />'+getCategories+'</p>';
    }
};

const getCategoriesNoTitle = function (store) {
    const getCategories = store.properties.types[0];
    const getOtherCats = store.properties.user_properties.other_cats;
    // if (getOtherCats) other_cats = '<strong>:</strong> ' + getOtherCats;
    // return '<p class="storeInfo getCategories">'+getCategories+'</p>'; */
    if (getCategories == 'Altro') {
      return '<p class="storeInfo getCategoriesNoTitle"><i>'+getCategories+': '+getOtherCats+'</i></p><p class="storeInfo getCategoriesNoTitleBtn"><i>Info &raquo;</i></p>';
    } else {
      return '<p class="storeInfo getCategoriesNoTitle"><i>'+getCategories+'</i></p><p class="storeInfo getCategoriesNoTitleBtn"><i>Info &raquo;</i></p>';
    }
};

const getServices = function (store) {
    const services = store.properties.user_properties.services;
    return '<p class="storeInfo getServices"><strong>Quali servizi offri oltre alla consegna a domicilio</strong><br />' + services + '</p>';
};

const getServicesNoTitle = function (store) {
    const services = store.properties.user_properties.services;
    return '<p class="storeInfo getServicesNoTitle">' + services + '</p>';
};

var loadStoreLocator = function () {
  var webapp = new WebApp('store-locator', 'woos-9aa31a07-fc32-392e-a112-bd5d7350a7e0');
  var isMobile = document.querySelector('body').clientWidth < 750;
  webapp.setConf(storeLocatorConfig);
  webapp.render(isMobile);

  webapp.setFullStoreRenderer(function (store) {
      let myCustomContent = document.createElement('ul');
      myCustomContent.id = "myCustomContentID";
      let html = [];

      //html.push(getName(store));
      html.push(getCategories(store));
      html.push(getAddress(store));
      html.push(getPhone(store));
      
      html.push(getServices(store));
      html.push(getShipsToWhere(store));
      html.push(getShipsToCost(store));
      html.push(getContacts(store));
    
      myCustomContent.innerHTML = html.join("");
      return myCustomContent;
  });

  webapp.setSummaryStoreRenderer(function (store) {
    let mySummaryContent = document.createElement('div');
    mySummaryContent.className = "store-summary";
    let html = [];

    html.push(getName(store));
    html.push(getAddressNoTitle(store));
    html.push(getCategoriesNoTitle(store));
    // html.push(getTagsNoTitle(store));

    mySummaryContent.innerHTML = html.join("");
    mySummaryContent.onclick = function () {
        console.log('Click Event: ' + store.properties.name);
    };
    return mySummaryContent;
  });
};


if (document.readyState === "complete") {
  loadStoreLocator();
}
if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", loadStoreLocator, false);
}
if (window.addEventListener) {
  window.addEventListener("load", loadStoreLocator, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", loadStoreLocator);
}

function openMenu() {
    $('.dropdown-btn').on('click', function() {
        $(this).toggleClass('active');
        $('.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
};
openMenu()

function changeLang() {
    $('.lang').on('click', function() {
        $('.lang').not($(this)).removeClass('active');
        $(this).addClass('active');
    })
};
changeLang()

function changeHeaderMenu() {
    $('.header-menu > li').on('click', function() {
        $('.header-menu > li').not($(this)).removeClass('active');
        $(this).addClass('active');
    })
};
changeHeaderMenu();

function fixedMenu() {
    if (window.scrollY > 10 && window.innerWidth < 767) {
        $('#header').css({ "position": "fixed", "padding-top": "25px", "padding-bottom": "10px", "background-color": "#333333", })
    } else {
        $('#header').css({ "height": "", "position": "", "padding-top": "", "padding-bottom": "", "background-color": "", })
    }
};
fixedMenu()