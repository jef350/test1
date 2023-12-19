var map = L.map('displaymap').setView([51.300923689936354, 4.514302997668732], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.300923689936354, 4.514302997668732]).addTo(map);

marker.bindPopup("Dit is mijn shop!").openPopup();


