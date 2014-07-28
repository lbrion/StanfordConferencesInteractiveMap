(function(window, document, undefined) {
  var GoogleMapView = {};
  
  // zoom level for Google Map
  var DEFAULT_ZOOM = 17;
  var STATUS_OK = 200;

  /* Renders a map for the given entry into the provided $map element. */
  GoogleMapView.render = function($map) {

    // Creating all of the golf cart spots.

    //Restricted, no charging spots
    var res_no_chg = [];

    res_no_chg[0] = { lat: 37.42529294231708, lng: -122.17059195041656, id: 1, type: 'Restricted, no charging', icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png', img: '../images/Golf Cart Station Pics/Old Union - Stanford Daily.jpg' };

    res_no_chg[1] = { lat: 37.425806286628806, lng: -122.16967731714249, id: 2, type: 'Restricted, no charging', icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' };

    //May be changed, need to find exact location.
    res_no_chg[2] = { lat: 37.42745918879866, lng: -122.17028081417084, id: 3, type: 'Restricted, no charging', icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' };

    //Open, no charging spots
    var opn_no_chg = [];
    
    opn_no_chg[0] = { lat: 37.427416588685404, lng: -122.17006087303162, id: 1, type: 'Open, no charging', icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' };

    opn_no_chg[1] = { lat: 37.42646233979577, lng: -122.16936081647873, id: 2, type: 'Open, no charging', icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' };

    opn_no_chg[2] = { lat: 37.426394178695396, lng: -122.17072069644928, id: 3, type: 'Open, no charging', icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' };

    opn_no_chg[3] = { lat: 37.42611301350035, lng: -122.16866344213486, id: 4, type: 'Open, no charging', icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' };

    opn_no_chg[4] = { lat: 37.425333413573206, lng: -122.17075288295746, id: 5, type: 'Open, no charging', icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' };

    opn_no_chg[5] = { lat: 37.42742936872193, lng: -122.16803044080734, id: 6, type: 'Open, no charging', icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' };

    opn_no_chg[6] = { lat: 37.424619838218376, lng: -122.17120617628098, id: 7, type: 'Open, no charging', icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' };

    //Restricted, charging spots
    var res_chg = [];

    res_chg[0] = { lat: 37.426892605309746, lng: -122.17151194810867, id: 1, type: 'Restricted, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png' };

    res_chg[1] = { lat: 37.4267413736535, lng: -122.16972827911377, id: 2, type: 'Restricted, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png' };

    res_chg[2] = { lat: 37.42645168962794, lng: -122.16984629631042, id: 3, type: 'Restricted, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png' };

    res_chg[3] = { lat: 37.425642272438786, lng: -122.1707957983017, id: 4, type: 'Restricted, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png' };

    res_chg[4] = { lat: 37.425013903061114, lng: -122.17175871133804, id: 5, type: 'Restricted, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png' };

    res_chg[5] = { lat: 37.423737977488855, lng: -122.17084407806396, id: 6, type: 'Restricted, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png' };

    res_chg[6] = { lat: 37.42720358775556, lng: -122.16759324073792, id: 7, type: 'Restricted, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png' };

    res_chg[7] = { lat: 37.42534193383486, lng: -122.1674644947052, id: 8, type: 'Restricted, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png' };

    res_chg[8] = { lat: 37.42620673534935, lng: -122.16503709554672, id: 9, type: 'Restricted, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png' };

    res_chg[9] = { lat: 37.425716824387884, lng: -122.16451406478882, id: 10, type: 'Restricted, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png' };

    res_chg[10] = { lat: 37.42318201647354, lng: -122.15507805347443, id: 11, type: 'Restricted, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png' };
    
    //Open, no charging spots
    var opn_chg = [];

    opn_chg[0] = { lat: 37.431271800762374, lng: -122.17653572559357, id: 1, type: 'Open, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', img: '../images/Golf Cart Station Pics/LKS-Beckman Parking Lot.bmp' };

    opn_chg[1] = { lat: 37.43031334116599, lng: -122.17740476131439, id: 2, type: 'Open, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', img: '../images/Golf Cart Station Pics/Juniper Hall.bmp' };

    opn_chg[2] = { lat: 37.429301620500645, lng: -122.1775496006012, id: 3, type: 'Open, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', img: '../images/Golf Cart Station Pics/Pine Hall.bmp' };

    opn_chg[3] = { lat: 37.424690131018, lng: -122.1750283241272, id: 4, type: 'Open, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' };

    opn_chg[4] = { lat: 37.42401489139699, lng: -122.17447847127914, id: 5, type: 'Open, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' };

    opn_chg[5] = { lat: 37.41928804354492, lng: -122.16746985912323, id: 6, type: 'Open, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' };
    //Image may be wrong
    opn_chg[6] = { lat: 37.423322604706435, lng: -122.15689390897751, id: 7, type: 'Open, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', img: '../images/Golf Cart Station Pics/EV - Comstock Circle (Behind Maintenance Ctr.).jpg' };
    //Image may be wrong
    opn_chg[7] = { lat: 37.422909359754286, lng: -122.15515851974487, id: 8, type: 'Open, charging', icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', img: '../images/Golf Cart Station Pics/EV - Behind Front Desk Office.jpg' };

    //Unknown type spots

    var unk_chg = [];

    unk_chg[0] = { lat: 37.421042273590004, lng: -122.16854810714722, id: 1, type: 'Unknown', icon: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png', img: '../images/Golf Cart Station Pics/Lasuen.jpg' };

    function close_all_infowin(arr  ) {
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
          if (arr[i][j].getContent())
            arr[i][j].close();
        }
      }
    }

    function display_markers(coords, map, markers, infoWindows, master) {
      for (var i = 0; i < coords.length; i++) {
        var myLatlng = new google.maps.LatLng(coords[i].lat, coords[i].lng);
        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Conferences Map',
          marker: i,
          icon: coords[i].icon
        });

        var content = "<h3>" + coords[i].type + " number " + coords[i].id + "</h3>" +
            "<p>" + "[description]" + "</p>" +
            "<p>Lat: " + coords[i].lat + " Lng: " + coords[i].lng + "</p>" +
            "<img class=\"thumb\" src=\"" + coords[i].img + "\">";
        var infoWindow = new google.maps.InfoWindow({
          content: content
        });

        google.maps.event.addListener(marker, 'click',
            function (event) {
              map.panTo(event.latLng);
              close_all_infowin(master);
              infoWindows[this.marker].open(map, this);
            }
        );

        infoWindows.push(infoWindow);
        console.log(infoWindow);
        markers.push(marker);
      }

      console.log(infoWindows);
    }

    //Stanford Coordinates
    var lat = 37.4272386;
    var lng = -122.1698012;

    var markers = Array();
    var infoWindows = Array();

    function initialize() {
      var myLatlng = new google.maps.LatLng(lat, lng);
      var mapOptions = {
        center: myLatlng,
        zoom: DEFAULT_ZOOM
      };
      var map = new google.maps.Map($map,
          mapOptions);



      infoWindows[0] = Array();
      display_markers(res_no_chg, map, markers, infoWindows[0], infoWindows);
      infoWindows[1] = Array();
      display_markers(opn_no_chg, map, markers, infoWindows[1], infoWindows);
      infoWindows[2] = Array();
      display_markers(res_chg, map, markers, infoWindows[2], infoWindows);
      infoWindows[3] = Array();
      display_markers(opn_chg, map, markers, infoWindows[3], infoWindows);
      infoWindows[4] = Array();
      display_markers(unk_chg, map, markers, infoWindows[4], infoWindows);

      google.maps.event.addListener(map, 'click', function (event) {

        marker = new google.maps.Marker({ position: event.latLng, map: map });
        console.log("lat: " + event.latLng.lat());
        console.log("lng: " + event.latLng.lng());
      });

      var firebase = new Firebase("https://burning-fire-7936.firebaseio.com/map");

      firebase.on('value', function (snapshot) {
        console.log(snapshot.val());
      }, function (errorObject) {
        console.log('The read failed: ' + errorObject.code);
      });

      firebase.set('test');
      firebase.set('test2');
    }

    initialize();
  };
  
  window.GoogleMapView = GoogleMapView;
})(this, this.document);
