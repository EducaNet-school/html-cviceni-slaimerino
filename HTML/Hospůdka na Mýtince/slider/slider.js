const images = ['img/a.jpg', 'img/b.jpg', 'img/c.jpg', 'img/d.jpg', 'img/e.jpg'];
const img = document.getElementById("image");
let currentIndex = 0;

function switchImages() {
  img.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

window.addEventListener('DOMContentLoaded', function() {
  switchImages();
  setInterval(switchImages, 400)});
