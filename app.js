const input = document.getElementById("places");
let map;
let marker;
let paronama;

function initMap() {

  const Coord = { lat: 42.345573, lng: -71.098326  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: Coord,
  });

  marker = new google.maps.Marker({
    position: Coord,
    map: map,
  });
  
  panorama = new google.maps.StreetViewPanorama(document.getElementById("pano"),
    {
      position: Coord,
      pov: {
        heading: 34,
        pitch: 10,
      },
    }
  );

  map.setStreetView(panorama);

  newAutocomplete();
}

function newAutocomplete(){
    let autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function(){
        const place = autocomplete.getPlace();
        console.log(place);
        map.setCenter(place.geometry.location);
        marker.setPosition(place.geometry.location);
        panorama.setPosition(place.geometry.location);
    });
}

