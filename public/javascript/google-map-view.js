(function(window, document, undefined) {
  var GoogleMapView = {};
  
  // zoom level for Google Map
  var DEFAULT_ZOOM = 17;
  var STATUS_OK = 200;

  /* Renders a map for the given entry into the provided $map element. */
  GoogleMapView.render = function($map) {
    var request = new XMLHttpRequest();

    function close_all_infowin(arr) {
      for (var i = 0; i < arr.length; i++)
        if (arr[i].getContent())
          arr[i].close();
    }

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

          var coords = [];

          for (var i = 0; i < 10; i++) {
            coords[i] = new google.maps.LatLng(lat + 0.0001 * i, lng + 0.0001 * i);
          }

          var markers = Array();
          var infoWindows = Array();

          for (var i = 0; i < 10; i++) {
            var myLatlng = coords[i];
            var marker = new google.maps.Marker({
              position: myLatlng,
              map: map,
              title: 'Conferences Map',
              marker: i
            });

            var content = "<h3>Info Window Number " + (1 + i) + "<h3>" +
               "<p>Lat: " + coords[i].lat() + " Lng: " + coords[i].lng() + "</p>";
            var infoWindow = new google.maps.InfoWindow({
              content: content
            });

            google.maps.event.addListener(marker, 'click',
                function (event) {
                  map.panTo(event.latLng);
                  close_all_infowin(infoWindows);
                  infoWindows[this.marker].open(map, this);
                }
            );

            infoWindows.push(infoWindow);
            console.log(infoWindows[i]);
            markers.push(marker);
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
