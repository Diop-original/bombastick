var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer(
    {
  		hideRouteList : false,
  		suppressPolylines : false,
  		routeIndex : 2,
  		geodesic : true
  	}
  );
  
  var chicago = new google.maps.LatLng(48.8566140, 2.3522219);
  var mapOptions = {
    zoom:4,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: chicago
  }





  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);
}

function calcRoute() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
