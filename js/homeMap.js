const loading = document.getElementById('loading-map');
const map = L.map('map').setView([0, 0], 2);

// Load the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Try to get the user's location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {

            loading.style.display = 'none'; // Hide loading spinner

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Center the map on the user's location
            map.setView([lat, lon], 15);

            // Add a marker for the user's location
            L.marker([lat, lon]).addTo(map)
                .bindPopup('You are here!')
                .openPopup();
        },
        () => {
            console.error('Unable to retrieve your location.');
        }
    );
} else {
    console.error('Geolocation is not supported by this browser.');
}