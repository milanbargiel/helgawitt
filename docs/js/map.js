// map
function initMap() {
  var praxis = {lat: 52.4993632, lng: 13.431456};
  var map = new google.maps.Map(document.getElementById('google-map'), {
    zoom: 14,
    center: praxis,
    disableDefaultUI: true,
    styles: [
    {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
      {
        "color": "#444444"
      }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
      {
        "color": "#f2f2f2"
      }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
      {
        "saturation": -100
      },
      {
        "lightness": 45
      }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
      {
        "visibility": "simplified"
      }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
      {
        "color": "#c0e4f3"
      },
      {
        "visibility": "on"
      }
      ]
    }
    ]
  });
  var marker = new google.maps.Marker({
    position: praxis,
    map: map,
    icon: {
      url: "images/map-marker.svg",
      scaledSize: new google.maps.Size(30, 30),
    }
  });
}