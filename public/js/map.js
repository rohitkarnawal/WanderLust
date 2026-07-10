const mapElement = document.getElementById("map");

if (mapElement) {
  const coordinates = JSON.parse(mapElement.dataset.coordinates);
  const location = mapElement.dataset.location;

  // GeoJSON = [lng, lat]
  const [lng, lat] = coordinates;

  const map = L.map("map").setView([lat, lng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      `<b>${location}</b><br>Exact Location provided after booking`
    )
    .openPopup();
}