initMap = () => {
  // Map options
  const options = {
    zoom: 15,
    center: { lat: 51.548526, lng: 0.652211 },
  };

  //   New Map
  const map = new google.maps.Map(document.getElementById("map"), options);

  //   Add Marker
  const marker = new google.maps.Marker({
    position: { lat: 51.548526, lng: 0.652211 },
    map: map,
  });
};
