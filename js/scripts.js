let myMap = null, 
    marker = null, 
    popup = null,
    geocoder= null,
    select = document.getElementById('city');
 
  function initMap(){
    geocoder = new google.maps.Geocoder()
    select.removeAttribute('hidden');

    select.dispatchEvent(new Event('change'));
}
    
 
    select.addEventListener('change',(e) => {
    let baAddress = e.target.value;
        baCity = e.target.querySelector(`[value="${baAddress}"]`).innerText,

    geocoder.geocode({address : baAddress}, (results,status) =>{
      if(status == 'OK') {
        console.log(results[0].geometry.location);
        console.log(results[0].geometry.location.lat());
        console.log(results[0].geometry.location.lng());

      let center = {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng()
      }

      if (myMap) {
        myMap.setCenter(center);
      } else {
        myMap = new google.maps.Map(document.getElementById('map'), {
          center: center,
          zoom: 15
        });
      }


      if (marker) {
        marker.setPosition(center);
      } else {
        marker = new google.maps.Marker({
          position: center,
          icon: 'img/pin.svg',
          map: myMap,
          
      });
    }

    if (!popup) {
      popup = new google.maps.InfoWindow();

      popup.open(myMap, marker);
      marker.addListener('click', () =>{
          infowindow.open(map, marker);
        });
  }


        myMap.setCenter(center);
        marker.setPosition(center)

        popup.setContent(`
        <div class='popup'>
            <b>${baCity}</b>
            <p>${baAddress}</p>
        </div>
        `
        );
      } else if (status == 'ZERO_RESULTS'){
        alert (`address not`);
        
      } else {
        alert (`mistaike: ${status}`)
      }
    })
 })