navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([0, 0]);
}

function setupMap(center) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYmhhcmFkaHdhajE4IiwiYSI6ImNsdzZsYTZrMjE2Nm0ya3Flbmtwczh2aXkifQ.xgdAteAx5Y3C4V-6WuG5hw";
  const map = new mapboxgl.Map({
    container: "map",
    center: center,
    style: "mapbox://styles/mapbox/streets-v11",
    zoom: 18,
  });

  map.addControl(new mapboxgl.NavigationControl());

  const directions = new MapboxDirections({
    accessToken:
      "pk.eyJ1IjoiYmhhcmFkaHdhajE4IiwiYSI6ImNsdzZsYTZrMjE2Nm0ya3Flbmtwczh2aXkifQ.xgdAteAx5Y3C4V-6WuG5hw",
  });

  map.addControl(directions, "top-left");
}
