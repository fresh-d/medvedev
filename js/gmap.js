function initialize(){
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(48.4555000, 35.067430)
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var image = 'images/marker.png';
  var myLatLng = new google.maps.LatLng(48.4555000, 35.067430);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
    title: 'Заголовок окна'
  });

  google.maps.event.addListener(marker, 'click', function(){
    infowindow.open(marker.get('map'), marker);
  });

  var infowindow = new google.maps.InfoWindow({
    content: 'Днепропетровск, пл.Октябрьская, 14&nbsp;&nbsp;',
    position: myLatLng,
    maxWidth: 600
  });
  infowindow.click(marker);
}

google.maps.event.addDomListener(window, 'load', initialize);