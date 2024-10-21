const apiKey = "RgPEPJE1DnHUdB2fB6yhrWRIaHs5jz9KCfUbqt7mNPuAztR4KFScqnXg";
const searchQuery = 'nature';
const apiUrl = `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=1`;

async function fetchImages() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });

    const data = await response.json();
    const images = data.photos;

    images.forEach(image => {
      const imageUrl = image.src.large;
      console.log(imageUrl);

      const img = document.createElement('img');
      img.src = imageUrl;
      document.querySelector('.gallery').appendChild(img);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchImages();
