(function(window, document, undefined) {
  var GoogleMapView = {};
  
  // zoom level for Google Map
  var DEFAULT_ZOOM = 17;
  var STATUS_OK = 200;

  /* Renders a map for the given entry into the provided $map element. */
  GoogleMapView.render = function($map) {
    var request = new XMLHttpRequest();

    request.addEventListener('load', function () {
      if (request.status !== STATUS_OK) {
        $('.error').html(error);
      } else {
        var results = JSON.parse(request.responseText).results;

        var lat = results[0].geometry.location.lat;
        var lng = results[0].geometry.location.lng;

        function initialize() {
          var myLatlng = new google.maps.LatLng(lat, lng);
          var mapOptions = {
            center: myLatlng,
            zoom: DEFAULT_ZOOM
          };
          var map = new google.maps.Map($map,
              mapOptions);

          for (var i = 0; i < 10; i++) {
            var myLatlng = new google.maps.LatLng(lat + 0.0001 * i, lng + 0.0001 * i);
            var marker = new google.maps.Marker({
              position: myLatlng,
              map: map,
              title: 'Conferences Map'
            });
          }
        }

        initialize();
      }
    });

    request.open('GET', 'http://maps.googleapis.com/maps/api/geocode/json?' + 'address=' + 'stanford main quad' + '&sensor=false', true);

    request.send();
  };
  
  window.GoogleMapView = GoogleMapView;
})(this, this.document);
