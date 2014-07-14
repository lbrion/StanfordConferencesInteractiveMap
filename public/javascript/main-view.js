(function (window, document, undefined) {
  var MainView = {};

  /* Renders the main area, showing entries. */
  MainView.render = function ($body) {
    var $map = $('.map')[0];
    GoogleMapView.render($map);
    console.log($map);
  };

  window.MainView = MainView;
})(this, this.document);
