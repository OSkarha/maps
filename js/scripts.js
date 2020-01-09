 function initMap(){
    let center= {lat: 47.0956867, lng: 37.5471833};

    let myMap = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 15
      });

      let marker = new google.maps.Marker({
          position: center,
          icon: 'img/pin.svg',
          map: myMap,
          
      })

      let popup = new google.maps.InfoWindow({
        content: `
        <div class='popup'>
            <b>mariupol</b>
            <p>hello</p>
        </div>
        `
      });

      
     
        popup.open(myMap, marker)
        marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
        
      
}
    
 