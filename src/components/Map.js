const Map = () => {
  const L = window.L;
  const map = L.map("map").setView([45.615812, -122.6266572], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);
};

export default Map;
