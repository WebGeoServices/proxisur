//french
//var woosmapKey = "woos-dac827d8-2486-3f46-99e2-a25338988fdb";

//UK
//var woosmapKey="woos-d7e23af4-a101-38b8-bd8d-0645ed79b46b";

//develop
//var woosmapKey = "woos-e3431ffa-5a40-3838-a856-38fbc7fa30ae";
//develop UK
//var woosmapKey = "woos-873b24c3-5e0a-3f3c-b088-5af8dd54460f";
//var jsI18n = {t: function(param){return param;}};

var renderInit = function (location) {

  var intialLat = 48.3313871;
  var intialLong = 2.5;
  var intialZoom = 5;
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
      "lang": languageCode,
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
        },
        "fr": {
          "filters": {
            "filters": "Choisir une categorie"
          }
        }
      }
    },
    "maps": {
      "provider": "google",
      "api_key": "AIzaSyBN8I1KsGyHdCkDEHY0G4-m6wZBzVwVVr0",
      //"geocoder": { "region": jsI18n.locale },
      "disableDirections": true,
      "places": {
        "types": ["geocode"]
      },
      "minLength": 3,
      /*"localities": {
        "language": "fr",
        "componentRestrictions": {
          "country": [jsI18n.locale]
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
            "fr": "",
            "en": ""
          },
          "choices": [
            { "key": "Chocolats de Pâques", "fr": "Chocolats de Pâques" , "en": "Easter Chocolates"},
            { "key": "Alimentation générale", "fr": "Alimentation Générale", "en": "Grocery" },
            { "key": "Pharmacie", "fr": "Pharmacie", "en": "Pharmacy" },
            { "key": "Boulangerie", "fr": "Boulangerie", "en": "Bakery" },
            { "key": "Supermarché", "fr": "Supermarché", "en": "Supermarket" },
            { "key": "Bar", "fr": "Bar", "en": "Bar" },
            { "key": "Fleuriste", "fr": "Fleuriste", "en": "Florist" },
            { "key": "Habillement", "fr": "Habillement", "en": "Clothes" },
            { "key": "Kiosque à journaux / papeterie", "fr": "Kiosque à journaux/Papeterie", "en":"Newsstand" },
            { "key": "Electronique / Téléphonie", "fr": "Electronique/Téléphonie", "en": "Phone/Electronic" },
            { "key": "Loisirs", "fr": "Loisirs", "en": "Hobbies" },
            { "key": "Parfumerie", "fr": "Parfumerie", "en": "Perfumery" },
            { "key": "Pressing", "fr": "Pressing" , "en": "Pressing"},
            { "key": "Optique", "fr": "Optique" , "en": "Optic"},
            { "key": "Animalerie", "fr": "Animalerie", "en": "Pet Shop" },
            { "key": "Puériculture", "fr": "Puériculture", "en": "Childcare" },
            { "key": "Maison ameublement", "fr": "Maison/Ameublement", "en": "House" },
            { "key": "Restaurants", "fr": "Restauration", "en": "Restaurants" },
            { "key": "Autre", "fr": "Autre", "en": "Other" }
          ],
          "innerOperator": "or"
        }
      ],
      "outerOperator": "and"
    }
  }


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


  if (document.readyState === "complete" || document.readyState === "interactive") {
    loadStoreLocator();
  } else if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", loadStoreLocator, false);
  }
  else if (window.addEventListener) {
    window.addEventListener("load", loadStoreLocator, false);
  } else if (window.attachEvent) {
    window.attachEvent("onload", loadStoreLocator);
  }
};


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
