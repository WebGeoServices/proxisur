var woosmapKey = "woos-dac827d8-2486-3f46-99e2-a25338988fdb";

//develop
//var woosmapKey = "woos-e3431ffa-5a40-3838-a856-38fbc7fa30ae";

var renderInit = function (location) {
  var intialLat = 46.1313871;
  var intialLong = 1;
  var intialZoom = 6;
  if (location) {
    intialLat = location.lat;
    intialLong = location.lng;
    intialZoom = 11;
  }

  var storeLocatorConfig = {
    "theme": {
      "primary_color": "#D81A60"
    },
    "datasource": {
      "api_key": woosmapKey,
      "max_responses": 150,
      "max_distance": 20000,
      "use_distance_matrix": false,
    },
    "recommendation": {
      "useRecommendation": false
    },
    "internationalization": {
      "lang": "fr",
      "unitSystem": 0,
      "customTranslations": {
        "it": {
          "filters": {
            "filters": "Scegli una categoria"
          }
        },
        "en": {
          "filters": {
            "filters": "Choose a category"
          }
        }
      }
    },
    "maps": {
      "provider": "google",
      "api_key": "AIzaSyBN8I1KsGyHdCkDEHY0G4-m6wZBzVwVVr0",
      "geocoder": { "region": "fr" },
      "disableDirections": true,
      "places": {
        "types": ["geocode"],
        "componentRestrictions": { "country": "fr" }
      },
      "minLength": 3,
      /*"localities": {
        "language": "fr",
        "componentRestrictions": {
          "country": ["fr"]
        },
        "types": ["locality", "postal_code"],
      },*/
    },
    "woosmapview": {
      "initialCenter": {
        "lat": intialLat,
        "lng": intialLong
      },
      "initialZoom": intialZoom,
      "tileStyle": {
        "color": "#D81A60",
        "size": 11,
        "minSize": 5,
        "typeRules": [
          { "type": "alimentari", "color": "#D81A60", "zIndex": 1 },
          { "type": "ristorazione", "color": "#D81A60", "zIndex": 2 },
          { "type": "casa", "color": "#D81A60", "zIndex": 3 },
          { "type": "servizi", "color": "#D81A60", "zIndex": 4 },
          { "type": "farmacie", "color": "#D81A60", "zIndex": 5 }
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
            "fr": ""
          },
          "choices": [
            { "key": "Chocolats de Pâques", "fr": "Chocolats de Pâques" },
            { "key": "Alimentation générale", "fr": "Alimentation Générale" },
            { "key": "Pharmacie", "fr": "Pharmacie" },
            { "key": "Boulangerie", "fr": "Boulangerie" },
            { "key": "Supermarché", "fr": "Supermarché" },
            { "key": "Restaurants", "fr": "Restauration" },
            { "key": "Fleuriste", "fr": "Fleuriste" },
            { "key": "Habillement", "fr": "Habillement" },
            { "key": "Bar", "fr": "Bar" },
            { "key": "Kiosque à journaux / papeterie", "fr": "Kiosque" },
            { "key": "Electronique / Téléphonie", "fr": "Electronique/Téléphonie" },
            { "key": "Loisirs", "fr": "Loisirs" },
            { "key": "Parfumerie", "fr": "Parfumerie" },
            { "key": "Pressing", "fr": "Pressing" },
            { "key": "Optique", "fr": "Optique" },
            { "key": "Animalerie", "fr": "Animalerie" },
            { "key": "Puériculture", "fr": "Puériculture" },
            { "key": "Maison ameublement", "fr": "Maison/Ameublement" },
            { "key": "Autre", "fr": "Autre" }
          ],
          "innerOperator": "or"
        }
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
    return '<p class="storeInfo getAddress"><strong>Adresse</strong><br />' + address + '</p>';
  };

  const getAddressNoTitle = function (store) {
    let address = store.properties.address.lines;
    return '<p class="storeInfo getAddressNoTitle">' + address + '</p>';
  };

  // Sito e email
  const getContacts = function (store) {
    let phone = store.properties.contact.phone;
    let email = store.properties.contact.email;
    let website = store.properties.contact.website;
    let html = "";
    // html += getPhone(store);
    if (phone) html += '<a href="tel:' + phone + '" class="btn">Téléphone</a>';
    if (email) html += '<a href="mailto:' + email + '" class="btn">Envoyer un email</a>';
    if (website) html += '<a href="' + website + '" class="btn">Visiter le site web</a>';
    return '<div class="">' + html + '</div><br>';
  };

  // Zone
  const getShipsToWhere = function (store) {
    let where = store.properties.user_properties.where;
    if (where) return '<p class="storeInfo getShipsToWhere"><strong>Zones couverte par le service de livraison</strong><br />' + where.replace('\n', '<br>') + '</p>';
  };

  // Costi
  const getShipsToCost = function (store) {
    let cost = store.properties.user_properties.cost;
    if (cost) return '<p class="storeInfo getShipsToCost"><strong>Cout</strong><br />' + cost.replace('\n', '<br>') + '</p>';
  };

  const tagLabels = {
    "habillement": "Habillement",
    "bar": "Bar",
    "kiosque_papeterie": "Kiosque à journaux / papeterie",
    "electronique_telephonie": "Electronique / Téléphonie",
    "pharmacie": "Pharmacie",
    "fleuriste": "Fleuriste",
    "boulangerie": "Boulangerie",
    "alimentation_generale": "Alimentation Générale",
    "loisirs": "Loisirs",
    "hygiene_beaute": "Hygiène et beauté",
    "pressing": "Pressing",
    "optique": "Optique",
    "animalerie": "Animalerie",
    "puericulture": "Puériculture",
    "maison_ameublement": "Maison / Ameublement",
    "restauration": "Restauration",
    "supermarche": "Supermarché",
    "autre": "Autre"
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
      tagsHTMLList += '<span class="btn">Voir plus d\'informations</span></p>';
    }
    return tagsHTMLList;
  };

  const getCategories = function (store) {
    const getCategories = store.properties.tags[0];
    const getOtherCats = store.properties.user_properties.other_cats;
    console.log(store);
    if (getCategories == 'Autre') {
      return '<p class="storeInfo getCategories"><strong>Categorie de produit</strong><br />' + getCategories + ': ' + getOtherCats + '</p>';
    } else {
      return '<p class="storeInfo getCategories"><strong>Categorie de produit</strong><br />' + getCategories + '</p>';
    }
  };

  const getCategoriesNoTitle = function (store) {
    const getCategories = store.properties.tags[0];
    const getOtherCats = store.properties.user_properties.other_cats;
    // if (getOtherCats) other_cats = '<strong>:</strong> ' + getOtherCats;
    // return '<p class="storeInfo getCategories">'+getCategories+'</p>'; */
    if (getCategories == 'Autre') {
      return '<p class="storeInfo getCategoriesNoTitle"><i>' + getCategories + ': ' + getOtherCats + '</i></p><p class="storeInfo getCategoriesNoTitleBtn"><i>Info &raquo;</i></p>';
    } else {
      return '<p class="storeInfo getCategoriesNoTitle"><i>' + getCategories + '</i></p><p class="storeInfo getCategoriesNoTitleBtn"><i>Info &raquo;</i></p>';
    }
  };

  const getServices = function (store) {
    const services = store.properties.user_properties.services;
    if (services) return '<p class="storeInfo getServices"><strong>Autres services proposés en plus de la livraison à domicile</strong><br />' + services + '</p>';
  };

  const getServicesNoTitle = function (store) {
    const services = store.properties.user_properties.services;
    if (services) return '<p class="storeInfo getServicesNoTitle">' + services + '</p>';
  };

  const getDistance = function (store) {
    let distance = "";
    if (store.properties.distance < 1000) distance = Math.round(store.properties.distance) + " mt";
    else distance = (store.properties.distance / 1000).toFixed(1) + " km"
    return '<p class="storeInfo getDistance">' + distance + '</p>';
  };

  var loadStoreLocator = function () {
    var webapp = new WebApp('store-locator', woosmapKey);
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
      // html.push(getDistance(store));
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
      // html.push(getDistance(store));
      html.push(getCategoriesNoTitle(store));
      // html.push(getTagsNoTitle(store));

      mySummaryContent.innerHTML = html.join("");
      mySummaryContent.onclick = function () {
        console.log('Click Event: ' + store.properties.name);
      };
      return mySummaryContent;
    });
  };


  if (document.readyState === "complete" || document.readyState === "interactive") {
    loadStoreLocator();
  } else if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", loadStoreLocator, false);
  }
  else if (window.addEventListener) {
    window.addEventListener("load", loadStoreLocator, false);
  } else if (window.attachEvent) {
    window.attachEvent("onload", loadStoreLocator);
  }

  function openMenu() {
    $('.dropdown-btn').on('click', function () {
      $(this).toggleClass('active');
      $('.header-menu').toggleClass('active');
      $('body').toggleClass('lock');
    });
  };
  openMenu()

  function changeLang() {
    $('.lang').on('click', function () {
      $('.lang').not($(this)).removeClass('active');
      $(this).addClass('active');
    })
  };
  changeLang()

  function changeHeaderMenu() {
    $('.header-menu > li').on('click', function () {
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
  fixedMenu();
}

$('#closeNotice').on('click', function () {
  window.setCookie('notice_seen', true);
  $('.notice').hide();
});
if (!window.getCookie('notice_seen')) {
  $('.notice').show();
}

var autocompleteService = new woosmap.localities.AutocompleteService(woosmapKey);
var locality = window.location.hash.substr(1);
if (locality) {
  autocompleteService.getQueryPredictions({
    input: locality,
    components: {
      country: ['fr']
    }
  }, response => {
    if (response && response.localities && response.localities.length > 0) {
      document.title = document.title + ' sur ' + response.localities[0].name;
      document.getElementById("metatitle1").setAttribute("content", document.getElementById("metatitle1").getAttribute("content") + ' sur ' + response.localities[0].name);
      document.getElementById("metadesc1").setAttribute("content", document.getElementById("metadesc1").getAttribute("content").replace('à domicile', 'à domicile' + ' sur ' + response.localities[0].name));
      document.getElementById("metatitle2").setAttribute("content", document.getElementById("metatitle2").getAttribute("content") + ' sur ' + response.localities[0].name);
      document.getElementById("metadesc2").setAttribute("content", document.getElementById("metadesc2").getAttribute("content").replace('à domicile', 'à domicile' + ' sur ' + response.localities[0].name));
      document.getElementById("metatitle3").setAttribute("content", document.getElementById("metatitle3").getAttribute("content") + ' sur ' + response.localities[0].name);
      document.getElementById("metadesc3").setAttribute("content", document.getElementById("metadesc3").getAttribute("content").replace('à domicile', 'à domicile' + ' sur ' + response.localities[0].name));

      renderInit(response.localities[0].location);
    }

  },
    renderInit
  );
} else {
  $.ajax({
    url: 'https://api.woosmap.com/geolocation/position/',
    type: 'GET',
    dataType: 'json',
    data: {
      key: woosmapKey
    }
  }).always(function (result) {
    var geoloc = null;
    if(result && result.latitude && result.longitude) {
      geoloc = {
        lat: result.latitude,
        lng: result.longitude
      };
    }
    renderInit(geoloc);
  });
}
