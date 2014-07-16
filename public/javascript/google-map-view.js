(function(window, document, undefined) {
  var GoogleMapView = {};
  
  // zoom level for Google Map
  var DEFAULT_ZOOM = 17;
  var STATUS_OK = 200;

  /* Renders a map for the given entry into the provided $map element. */
  GoogleMapView.render = function($map) {
    var res_no_chg = [];

    res_no_chg[0] = { lat: 37.42529294231708, lng: -122.17059195041656, type: 'Restricted, no charging.' };

    res_no_chg[1] = { lat: 37.425806286628806, lng: -122.16967731714249, type: 'Restricted, no charging.' };

    //May be changed, need to find exact location.
    res_no_chg[2] = { lat: 37.42745918879866, lng: -122.17028081417084, type: 'Restricted, no charging.' };

    var opn_no_chg = [];
    
    opn_no_chg[0] = {};

    opn_no_chg[1] = {};

    opn_no_chg[2] = {};

    opn_no_chg[3] = {};

    opn_no_chg[4] = {};

    opn_no_chg[5] = {};

    opn_no_chg[6] = {};

    function close_all_infowin(arr) {
      for (var i = 0; i < arr.length; i++)
        if (arr[i].getContent())
          arr[i].close();
    }

    var lat = 37.4272386;
    var lng = -122.1698012;

    function initialize() {
      var myLatlng = new google.maps.LatLng(lat, lng);
      var mapOptions = {
        center: myLatlng,
        zoom: DEFAULT_ZOOM
      };
      var map = new google.maps.Map($map,
          mapOptions);

      var coords = res_no_chg;

      //for (var i = 0; i < 10; i++) {
      //  coords[i] = new google.maps.LatLng(lat + 0.0001 * i, lng + 0.0001 * i);
      //}

      var markers = Array();
      var infoWindows = Array();

      for (var i = 0; i < coords.length; i++) {
        var myLatlng = new google.maps.LatLng(coords[i].lat, coords[i].lng);
        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Conferences Map',
          marker: i
        });

        var content = "<h3>" + i + "<h3>" +
            "<p>Lat: " + coords[i].lat + " Lng: " + coords[i].lng + "</p>"+
            "<p>" + coords[i].type + "</p>";
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

      google.maps.event.addListener(map, 'click', function (event) {

        marker = new google.maps.Marker({ position: event.latLng, map: map });
        console.log("lat: " + event.latLng.lat());
        console.log("lng: " + event.latLng.lng());
      });
    }

    initialize();
  };
  
  window.GoogleMapView = GoogleMapView;
})(this, this.document);
