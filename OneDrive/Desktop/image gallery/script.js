// Pexels API key
const API_KEY = "RgPEPJE1DnHUdB2fB6yhrWRIaHs5jz9KCfUbqt7mNPuAztR4KFScqnXg" ;

// Fetch images from Pexels API
async function fetchImages() {
    const response = await fetch('https://api.pexels.com/v1/search?query=nature&per_page=9', {
        headers: {
            Authorization: API_KEY
        }
    });
    const data = await response.json();
    displayImages(data.photos);
}

// Display images in the gallery
function displayImages(photos) {
    const gallery = document.getElementById('gallery');
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.src.medium;
        img.alt = photo.photographer;
        gallery.appendChild(img);
    });
}

// Load images when the page loads
window.onload = fetchImages;
