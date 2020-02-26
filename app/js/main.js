[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});

// load Google Maps on Click for GDPR compliance
function createMapScript() {
	var s = document.createElement('script');
	s.async = true;
	s.defer = true;
	s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBxAWHYbxov5pIAYkQEaznPnDlH2N01RkA&callback=initMap";
	document.getElementById('google-map').appendChild(s);
}

document.querySelector('.js-load-google-maps').addEventListener('click', createMapScript);
